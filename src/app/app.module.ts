import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FullCalendarModule } from '@fullcalendar/angular';

// Configuración manual de Firebase
import { provideFirebaseApp,initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
    // provideFirebaseApp(()=> initializeApp(environment.firebaseConfig)),
    // provideFirestore (()=> getFirestore()),
    // provideDatabase(()=>getDatabase()),

  ],
  providers: [
    {
      provide: 'FirebaseApp',
      useFactory: () => initializeApp(environment.firebase),
    },
    {
      provide: 'Firestore',
      useFactory: (app: any) => getFirestore(app),
      deps: ['FirebaseApp'],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
