import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categoria} from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  apiURL='https://localhost:5001/api/categorias';
  
  constructor(private http:HttpClient) { }

  obtenerCategorias(){
    return this.http.get<Categoria[]>(this.apiURL);
  }
}
