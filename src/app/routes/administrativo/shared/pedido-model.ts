import { Cliente } from "./cliente.model";
import { ItemPedido } from "./item-pedido.model";

export class Pedido {

    id: string;

    cliente: Cliente;

    itens: ItemPedido[] = [];

    valorFrete = 0;
}