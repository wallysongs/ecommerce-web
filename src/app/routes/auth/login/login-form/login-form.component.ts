import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  usuario = new Usuario();

  constructor(private router: Router) { }

  login(): void {
    let chave = "usuario"
    let usuario = localStorage.getItem(chave);
    
    if (usuario) {
      localStorage.removeItem(chave)
    }
    
    if (!this.usuario.senha || !this.usuario.nome) {
    
    } else if (this.usuario.nome === 'admin' && this.usuario.senha === 'admin') {
      this.usuario.isAutenticado = true;
      localStorage.setItem(chave, JSON.stringify(this.usuario));
      this.router.navigate(['/administrativo']);
    } else {
      this.usuario = new Usuario();
    }
  }
}
