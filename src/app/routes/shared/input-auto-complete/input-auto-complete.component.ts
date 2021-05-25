import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'input-auto-complete',
  templateUrl: './input-auto-complete.component.html',
  styleUrls: ['./input-auto-complete.component.scss']
})
export class InputAutoCompleteComponent {

  @Input() itens: any[];
  @Input() placeholder: string;
  
  value: string;
  item: any;

  @Output() selecionouItem = new EventEmitter();
  @Output() realizouConsulta = new EventEmitter();

  constructor() { }

  consultar() {
    this.realizouConsulta.emit(this.value);
  }

  itemSelecionado(item: any) {
    this.selecionouItem.emit(item);
    this.limparConsulta();      
  }

  limparConsulta() {
    this.itens = [];
    this.value = ''
  }

}
