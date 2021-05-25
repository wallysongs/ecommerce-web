import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "../../auth/login/shared/auth.guard";
import { PedidosFormComponent } from "./pedidos-form/pedidos-form.component";
import { PedidosListComponent } from "./pedidos-list/pedidos-list.component";

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: PedidosListComponent
    },
    {
        path: 'new',
        canActivate: [AuthGuard],
        component: PedidosFormComponent
    },
    {
        path: 'edit/:id',
        canActivate: [AuthGuard],
        component: PedidosFormComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PedidosRountingModule { }