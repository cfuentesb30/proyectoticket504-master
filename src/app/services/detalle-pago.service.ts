import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Carrito} from '../models/Carrito';

@Injectable({
  providedIn: 'root'
})
export class DetallePagoService {

  constructor(private http: HttpClient) { }

  obtenerDetalles(){
  }
}

