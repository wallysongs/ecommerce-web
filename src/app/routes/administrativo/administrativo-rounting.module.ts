import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/login/shared/auth.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'pedidos',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosModule)
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrativoRoutingModule { }