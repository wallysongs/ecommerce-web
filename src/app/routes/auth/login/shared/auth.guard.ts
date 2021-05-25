import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivateChild, Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { Usuario } from './usuario.model';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    private chave = "usuario";

    constructor(private route: ActivatedRoute,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivateChild(route, state);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const usuario: Usuario = this.getData(this.chave);

        if (!usuario) {
            this.router.navigate(['/login']);
        }

        return usuario.isAutenticado;
    }

    getData(chave: string): any {
        let usuario = localStorage.getItem(chave);

        if (!usuario) {
            return null
        }

        return JSON.parse(usuario || '{}');
    }

    setData(chave: string, data: any): void {
        localStorage.setItem(chave, JSON.stringify(data));
    }
}