import {Evento} from 'src/app/models/Evento';
import {Categoria} from 'src/app/models/Categoria';
import {Usuario} from 'src/app/models/Usuario';

export class Carrito {
    Id: Number;
    IdCategoria :Number;
    IdUsuario: Number;
    Cantidad: Number;
    Categoria: Categoria;
    Usuario: Usuario;
}