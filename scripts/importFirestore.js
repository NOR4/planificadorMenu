const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

// Inicializa Firebase Admin SDK
const serviceAccount = require(path.join(__dirname, "../db/serviceAccountKey.json")); // Reemplaza con la ruta a tu archivo de claves
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
// Lista de archivos JSON y sus respectivas colecciones
const filesToImport = [
  { file: "alimento.json", collection: "alimentos" },
  { file: "platos.json", collection: "platos" },
  { file: "platosalimento.json", collection: "platosalimentos" },
];


// Importa los datos a Firestore
async function importData() {
  for (const { file, collection } of filesToImport) {
    try {
      const filePath = path.join(__dirname, "../db", file);
      if (!fs.existsSync(filePath)) {
        console.warn(`El archivo ${file} no existe. Saltando...`);
        continue;
      }

      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      const collectionRef = db.collection(collection);

      for (const [docId, docData] of Object.entries(data)) {
        const docRef = collectionRef.doc(docId);

        // Verifica si el documento ya existe
        const docSnapshot = await docRef.get();
        if (docSnapshot.exists) {
          // Si existe, actualiza los datos
          await docRef.update(docData);
          console.log(`Documento ${docId} actualizado en la colección ${collection}`);
        } else {
          // Si no existe, crea un nuevo documento
          await docRef.set(docData);
          console.log(`Documento ${docId} añadido a la colección ${collection}`);
        }
      }
    } catch (error) {
      console.error(`Error al procesar el archivo ${file} para la colección ${collection}:`, error);
    }
  }
  console.log("Importación completada.");
}

importData().catch((error) => console.error("Error al importar datos:", error));
