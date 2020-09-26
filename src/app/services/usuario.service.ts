import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Usuario} from 'src/app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  apiURL='https://localhost:5001/api/usuarios';


  constructor(private http: HttpClient) { }

  obtenerUsuarios(){
    return this.http.get<Usuario[]>(this.apiURL);
  }
}
