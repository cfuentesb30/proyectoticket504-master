import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categoria} from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  constructor(private http:HttpClient) { }

  obtenerCategorias(){
  }
}
