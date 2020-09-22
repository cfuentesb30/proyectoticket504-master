import {Evento} from 'src/app/models/Evento';
import {Categoria} from 'src/app/models/Categoria';

export class Carrito {
    Id: number;
    IdCategoria :number;
    evento: Evento;
    precio: Categoria;
    cantidad: Number;
}