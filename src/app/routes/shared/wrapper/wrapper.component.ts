import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  @Input() titulo = '';
  @Input() icon = ''

  icone = '';

  private caminho = '../../../../assets/icones'

  icons = new Map();


  constructor() {
    this.icons.set("apagar", `${this.caminho}/icone-apagar.png`);
    this.icons.set("cliente", `${this.caminho}/icone-cliente.png`);
    this.icons.set("carrinho", `${this.caminho}/icone-carrinho.png`);
    this.icons.set("pesquisa", `${this.caminho}/icone-pesquisa.png`);
    this.icons.set("total", `${this.caminho}/icone-total.png`);
    this.icons.set("pedido", `${this.caminho}/icone-pedidos.png`)
  }

  ngOnInit(): void {
    this.icone = this.icons.get(this.icon);
  }

}
