import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Evento} from '../models/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  apiURL='https://localhost:5001/api/eventos';

  constructor(private http:HttpClient) { }

  obtenerEventos(){
    return this.http.get<Evento[]>(this.apiURL);
  }
}
