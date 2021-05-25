import { Pedido } from "./pedido-model";

export class PedidoDTO {

    id: string;

    valorFrete: number;

    valorTotal: number;

    quantidadeProduto: number;

    constructor(pedido: Pedido) {
        this.id = pedido.id;
        this.valorFrete = pedido.valorFrete;

        this.quantidadeProduto = pedido.itens.reduce((total, itemPedido) => {
            return total + itemPedido.quantidade;
        }, 0);

        this.valorTotal = pedido.itens.reduce((total, itemPedido) => {
            let valorTotalItem = itemPedido.produto.precoUnitario * itemPedido.quantidade;
            return total + valorTotalItem;
        }, pedido.valorFrete)
    }
}