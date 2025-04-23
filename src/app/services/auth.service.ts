import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User, onAuthStateChanged } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private auth: Auth) {
    // Escucha cambios de sesión
    onAuthStateChanged(this.auth, user => {
      this.currentUserSubject.next(user);
    });
  }

  // Registro de usuario
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Inicio de sesión
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Cierre de sesión
  logout() {
    return signOut(this.auth);
  }

  // Usuario actual
  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}
