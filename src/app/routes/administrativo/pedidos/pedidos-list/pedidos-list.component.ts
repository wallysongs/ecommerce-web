import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../shared/pedido.service';
import { PedidoDTO } from '../../shared/pedidoDTO';

@Component({
  selector: 'pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.scss']
})
export class PedidosListComponent implements OnInit {


  pedidos: PedidoDTO[];

  constructor(private pedidoService: PedidosService) { }

  ngOnInit(): void {
    this.pedidoService.buscarTodos().subscribe(pedidos => {
      this.pedidos = pedidos.map(pedido => new PedidoDTO(pedido))
    });
  }

}
