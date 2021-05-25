import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ItemPedido } from '../../../shared/item-pedido.model';

@Component({
  selector: 'item-pedido',
  templateUrl: './item-pedido.component.html',
  styleUrls: ['./item-pedido.component.scss']
})
export class ItemPedidoComponent implements OnInit {

  @Input() item: ItemPedido;

  @Output() alterouQuantidade = new EventEmitter();

  @Output() removeuProduto = new EventEmitter();

  @ViewChild("quantidade") quantidade: ElementRef;

  valorTotalProduto = 0;

  constructor() { }

  ngOnInit() {
    this.calcularTotalProduto();
  }

  alterarQuantidade(item: ItemPedido) {

    let quantidade = Number.parseInt(this.quantidade.nativeElement.value);


    if(Number.isNaN(quantidade)) {
      quantidade = 1;
      this.quantidade.nativeElement.value = 1;
    }

    if (Number.isInteger(quantidade) && quantidade > 0) {
      item.quantidade = quantidade
      this.calcularTotalProduto();
      this.alterouQuantidade.emit(item);
    } else {
      item.quantidade = 1;
      this.quantidade.nativeElement.value = 1;
    }

  }

  calcularTotalProduto() {
    this.valorTotalProduto = this.item.quantidade * this.item.produto.precoUnitario;
  }

  removerItem(item: ItemPedido) {
    this.removeuProduto.emit(item);
  }

}
