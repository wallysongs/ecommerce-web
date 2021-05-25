import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Cliente } from '../../administrativo/shared/cliente.model';

@Component({
  selector: 'input-auto-complete-select-one',
  templateUrl: './input-auto-complete-select-one.component.html',
  styleUrls: ['./input-auto-complete-select-one.component.scss']
})
export class InputAutoCompleteSelectOneComponent {

  @Input() itens: any[];
  @Input() placeholder: string;
  
  @Output() selecionouItem = new EventEmitter();
  @Output() realizouConsulta = new EventEmitter();
  @Output() removeuItem = new EventEmitter();

  value: string;
  item: any;
  selecionado = false;

  constructor() { }

  consultar() {
    this.realizouConsulta.emit(this.value);
  }

  itemSelecionado(event: any) {
    this.selecionouItem.emit(event);
    this.value = event.nome;
    this.itens = [];
    this.selecionado = true;
  }

  removerItem() {
    this.removeuItem.emit();
    this.selecionado = false;
    this.itens = [];
    this.value = ''
  }

}
