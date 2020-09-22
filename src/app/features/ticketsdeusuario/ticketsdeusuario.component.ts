import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'TicketsdeusuarioComponent',
  styleUrls: ['ticketsdeusuario.component.css'],
  templateUrl: 'ticketsdeusuario.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableExpandableRowsExample {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Evento', 'Boleto', 'Categoria', 'Asiento'];
  expandedElement: Tickets | null;
}

export interface Tickets {
  Evento: string;
  Asiento: number;
  Boleto: number;
  Categoria: string;
  FechayHora: string;
}

const ELEMENT_DATA: Tickets[] = [
  {
    Asiento: 12,
    Evento: 'Bad Bunny Live',
    Boleto: 235,
    Categoria: 'Concierto',
    FechayHora: `10:00 PM - 09/07/2021`
  }, {
    Asiento: 23,
    Evento: 'Juanes',
    Boleto: 9432,
    Categoria: 'Concierto',
    FechayHora: `8:00 PM - 08/07/2020`
  }, {
    Asiento: 36,
    Evento: 'Partido de Soccer',
    Boleto: 123,
    Categoria: 'Deporte',
    FechayHora: `5:00 PM - 09/17/2019`
  }, {
    Asiento: 48,
    Evento: 'Tusa Live',
    Boleto: 10,
    Categoria: 'Concierto',
    FechayHora: `11:00 PM - 09/10/2020`
  }, {
    Asiento: 54,
    Evento: 'Bebecita Bebelin',
    Boleto: 156,
    Categoria: 'Concierto',
    FechayHora: `7:00 PM - 10/09/2022`
  }, {
    Asiento: 69,
    Evento: 'GCG: Gold chicken GOld Concert',
    Boleto: 1256,
    Categoria: 'Feria',
    FechayHora: `9:00 AM - 10/07/2022`
  }, {
    Asiento: 77,
    Evento: 'Things',
    Boleto: 1238,
    Categoria: 'Misc',
    FechayHora: `TBD - 12/07/2020`
  }, {
    Asiento: 82,
    Evento: 'Ya no tiene excusa',
    Boleto: 23,
    Categoria: 'Concierto',
    FechayHora: `8:00 PM - 5/12/2021`
  }, {
    Asiento: 99,
    Evento: 'Ya mejor llevame',
    Boleto: 265,
    Categoria: 'Misc',
    FechayHora: `5:00 PM - 01/30/2030`
  }, {
    Asiento: 102,
    Evento: 'Are we there yet',
    Boleto: 832,
    Categoria: 'Misc',
    FechayHora: `8:00 PM - 09/18/2023`
  },
];
