import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // Importa el plugin necesario
import { PlatoService } from '../../services/platoservice.service';
import { Plato } from '../../model/plato.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  recetas : Plato[] = [];
    calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth', // Vista del calendario
    plugins: [dayGridPlugin], // Registra el plugin aquí
    events: [
      { title: 'Evento 1', date: '2024-11-21' },
      { title: 'Evento 2', date: '2024-11-22' }
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    }
  };

  constructor(private platoService: PlatoService) {  }

  ngOnInit(): void {
    this.platoService.fetchRecetas().subscribe({
      next: (data) => {
        console.log("Datos recibidos:", data);
        this.recetas = data;
        console.log(this.recetas);
      },
      error: (error) => {console.error('Error al mostrar los platos', error);},
    });
  }
}