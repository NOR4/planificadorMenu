import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // Importa el plugin necesario
import { PlatoService } from '../../services/platoservice.service';
import {getDatabase, ref, set} from 'firebase/database';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  platos: any[] = [];
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
    this.platoService.fetchPlatos().then(data => {
      this.platos = data;
      console.log(this.platos);
    });
  }
}