import { Injectable } from '@angular/core';
;import { initializeApp } from  'firebase/app'
import { getFirestore, collection, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { firebaseApp$ } from '@angular/fire/app';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  private db: any;

  constructor() {
    //inicializa la firebase app
    const app = initializeApp(environment.firebase);
    this.db = getFirestore(app);
    
  }

  async fetchPlatos(): Promise<any[]> {
    const platosCollection = collection(this.db, 'platos');
    const snapshot = await getDocs(platosCollection);
    const platos = snapshot.docs.map(doc => doc.data());
    console.log(platos);
    return platos;
  }

  
}
