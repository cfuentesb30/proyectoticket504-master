import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Proveedor} from 'src/app/models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  apiURL='https://localhost:5001/api/proveedors';

  constructor(private http: HttpClient) { }

  obtenerProveedores(){
    return this.http.get<Proveedor[]>(this.apiURL);
  }

}
