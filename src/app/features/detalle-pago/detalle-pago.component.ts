import { Component, OnInit } from '@angular/core';
import {DetallePagoService} from 'src/app/services/detalle-pago.service';
import { Carrito} from 'src/app/models/Carrito';


@Component({
  selector: 'app-detalle-pago',
  templateUrl: './detalle-pago.component.html',
  styleUrls: ['./detalle-pago.component.css']
})
export class DetallePagoComponent implements OnInit {
  detalles: Carrito[];

  constructor(private _detallepagoservice: DetallePagoService) { }

  ngOnInit(): void {
    this.obtenerDetalles();
  }

  obtenerDetalles(){
    this._detallepagoservice.obtenerDetalles().subscribe(data => {
      this.detalles=data;
    })
  }

}
