import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlatoService {

  private firestore: Firestore;

  constructor() {
    // Inyecta Firestore
    this.firestore = inject(Firestore);
  }

  // Método para obtener los datos de la colección "platos"
  fetchRecetas(): Observable<any[]> {
    const recetasCollection = collection(this.firestore, 'recetas');
    return collectionData(recetasCollection);  // Devuelve un Observable
  }

  fetchRecetasPorCategoria(categoria: string): Observable<any[]> {
    const recetasCollection = collection(this.firestore, 'recetas');
    const q = query(recetasCollection, where('categoria', '==', categoria));
    return collectionData(q, { idField: 'id' });
}
}