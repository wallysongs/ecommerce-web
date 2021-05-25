import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosFormComponent } from './pedidos-form/pedidos-form.component';
import { PedidosListComponent } from './pedidos-list/pedidos-list.component';
import { PedidosRountingModule } from './pedidos-routing.module';
import { WrapperComponent } from '../../shared/wrapper/wrapper.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { InputAutoCompleteComponent } from '../../shared/input-auto-complete/input-auto-complete.component';
import { ItemPedidoComponent } from './shared/itens-pedido/item-pedido.component';
import { InputAutoCompleteSelectOneComponent } from '../../shared/input-auto-complete-select-one/input-auto-complete-select-one.component';



@NgModule({
  declarations: [
    PedidosFormComponent,
    PedidosListComponent,
    WrapperComponent,
    InputAutoCompleteComponent,
    InputAutoCompleteSelectOneComponent,
    ItemPedidoComponent
  ],
  imports: [
    CommonModule,
    PedidosRountingModule,
    SharedModule
  ]
})
export class PedidosModule { }
