import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../../shared/cliente.model';
import { ClienteService } from '../../shared/cliente.service';
import { ItemPedido } from '../../shared/item-pedido.model';
import { Pedido } from '../../shared/pedido-model';
import { PedidosService } from '../../shared/pedido.service';
import { Produto } from '../../shared/produto.model';
import { ProdutoService } from '../../shared/produto.service';
import { FreteService } from '../../shared/frete.service';

@Component({
  selector: 'pedidos-form',
  templateUrl: './pedidos-form.component.html',
  styleUrls: ['./pedidos-form.component.scss']
})
export class PedidosFormComponent {

  titulo: string;
  visualizarPedido: boolean;
  tituloCliente = "Cliente";

  listaClientes: Cliente[] = [];
  listaProdutos: Produto[] = [];

  valorTotalProdutos = 0;
  valorTotalPedido = 0;

  pedido = new Pedido()

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
    private pedidoService: PedidosService,
    private freteService: FreteService) {
  }

  salvarPedido() {
    if (this.pedido.itens.length > 0 && this.pedido.valorFrete && this.pedido.cliente) {
      this.pedidoService.salvar(this.pedido).subscribe(
        response => this.router.navigate(['/administrativo/pedidos'])
      )
    }
  }

  consultarCliente(nome: string): void {
    this.clienteService.buscarPeloNome(nome).subscribe(clientes => this.listaClientes = clientes)
  }

  consultarProduto(nome: string) {
    this.produtoService.buscarPeloNome(nome).subscribe(produtos => this.listaProdutos = produtos)
  }

  adicionarCliente(cliente: Cliente) {
    this.pedido.cliente = cliente;
  }

  adicionarProduto(produto: any) {
    let index = this.pedido.itens.findIndex(item => item.produto.id === produto.id);

    if (index >= 0) {
      this.pedido.itens[index].quantidade += 1;
    } else {
      let itemPedido = new ItemPedido();
      itemPedido.produto = produto;
      itemPedido.quantidade = 1;
      this.pedido.itens.push(itemPedido);
    }

    this.atualizarValores()

  }


  limparCarrinho() {
    this.pedido.itens = [];
    this.pedido.valorFrete = 0;
    this.valorTotalPedido = 0;
    this.valorTotalProdutos = 0;
  }

  alterarQuantidade(item: ItemPedido) {
    let index = this.pedido.itens.findIndex(ItemPedido => ItemPedido.produto.id === item.produto.id);
    this.pedido.itens[index] = item;
    this.atualizarValores()
  }

  finalizarPedido() {    if (!this.pedido.cliente.id) {
      alert('Necessário adicionar um cliente.')
    } else if (this.pedido.itens.length < 1) {
      alert('Necessário adicionar ao menos um produto.')
    } else {
      this.pedidoService.salvar(this.pedido).subscribe(
        response => this.router.navigate(['/administrativo/pedidos'])
      );
    }
  }

  removerProduto(event: ItemPedido) {
    let index = this.pedido.itens.findIndex(item => item.produto.id === event.produto.id);
    this.pedido.itens.splice(index, 1);
    this.atualizarValores()
  }

  calcularValorDosProdutos() {
    this.valorTotalProdutos = this.pedido.itens.reduce((total, item) => total + (item.quantidade * item.produto.precoUnitario), 0)

  }

  atualizarValores() {
    let quantidadeProduto = this.pedido.itens.reduce((total, item) => total += item.quantidade, 0);
    this.calcularValorDosProdutos();
    if (this.pedido.itens.length > 0) {
      this.freteService.consultarFrete(quantidadeProduto).subscribe(
        frete => {
          this.pedido.valorFrete = frete.valorTotal;
          this.valorTotalPedido = this.valorTotalProdutos + this.pedido.valorFrete;
        }
      )
    } else {
      this.pedido.valorFrete = 0;
    }
  }

  removerCliente() {
    this.pedido.cliente = new Cliente();
  }
}
