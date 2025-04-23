import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
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
}
