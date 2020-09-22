import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetallePagoComponent } from './features/detalle-pago/detalle-pago.component';
import { MensajeConfirmacionComponent } from './features/mensaje-confirmacion/mensaje-confirmacion.component';
import { SesionUsuarioComponent } from './features/sesion-usuario/sesion-usuario.component';
import { ContactanosComponent } from './features/contactanos/contactanos.component';
import { RecuperarClaveComponent } from './features/recuperar-clave/recuperar-clave.component';
import { EditarPerfilComponent } from './features/editar-perfil/editar-perfil.component';
import { AgregarTarjetaComponent } from './features/agregar-tarjeta/agregar-tarjeta.component';
import { DetalleDeEventoComponent } from './features/detalle-de-evento/detalle-de-evento.component';
import { TablaDeEventosComponent } from './features/tabla-de-eventos/tabla-de-eventos.component';
import { InicioComponent } from './features/inicio/inicio.component';
import {NgImageSliderModule} from 'ng-image-slider';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
//import {TicketdeUsuarioComponent} from './features/ticketsdeusuario/ticketsdeusuario.component';


@NgModule({
  declarations: [
    AppComponent,
    DetallePagoComponent,
    MensajeConfirmacionComponent,
    SesionUsuarioComponent,
    ContactanosComponent,
    RecuperarClaveComponent,
    EditarPerfilComponent,
    AgregarTarjetaComponent,
    DetalleDeEventoComponent,
    TablaDeEventosComponent,
    InicioComponent,
   // TicketsdeusuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
