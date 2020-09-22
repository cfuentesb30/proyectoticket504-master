import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Carrito} from '../models/Carrito';

@Injectable({
  providedIn: 'root'
})
export class DetallePagoService {
  apiURL='https://localhost:5001/api/carritos';

  constructor(private http: HttpClient) { }

  obtenerDetalles(){
    return this.http.get<Carrito[]>(this.apiURL);
  }
}
