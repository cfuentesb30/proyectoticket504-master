import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import {DetallePagoService} from 'src/app/services/detalle-pago.service';
import {CategoriaService} from 'src/app/services/categoria.service';
import {EventoService} from 'src/app/services/evento.service';
import {ProveedorService} from 'src/app/services/proveedor.service';
import {UsuarioService} from 'src/app/services/usuario.service';
import { Carrito} from 'src/app/models/Carrito';
import {Categoria} from 'src/app/models/Categoria';
import {Evento} from 'src/app/models/Evento';
import {Proveedor} from 'src/app/models/Proveedor';
import {Usuario} from 'src/app/models/Usuario';


@Component({
  selector: 'app-detalle-pago',
  templateUrl: './detalle-pago.component.html',
  styleUrls: ['./detalle-pago.component.css']
})
export class DetallePagoComponent implements OnInit {
  detalles: Carrito[];
  categorias: Categoria[];
  eventos: Evento[];
  proveedores: Proveedor[];
  usuarios: Usuario[];

  constructor(private _detallepagoservice: DetallePagoService, 
    private _categoriaservice: CategoriaService,
    private _eventoservice: EventoService,
    private _proveedorservice: ProveedorService,
    private _usuarioservice: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.obtenerDetalles();
    this.obtenerCategorias();
  }

  obtenerDetalles(){
    this._detallepagoservice.obtenerDetalles().subscribe(data => {
      this.detalles=data;
    })
  }

  obtenerCategorias(){
    this._categoriaservice.obtenerCategorias().subscribe(data => {
      this.categorias=data;
    })
  }

}