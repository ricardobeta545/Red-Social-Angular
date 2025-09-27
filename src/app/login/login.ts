import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
  imports: [FormsModule, CommonModule]
})
export class Login {

  username: string = '';
  password: string = '';
  showUsername: boolean = false;
  showPassword: boolean = false;

  constructor(
    public router: Router,
    public authService: AuthService 
  ) {}

  login() {
    if (!this.username) {
      this.showUsername = true;
      return;
    } else {
      this.showUsername = false;
    }

    if (!this.password) {
      this.showPassword = true;
      return;
    } else {
      this.showPassword = false;
    }

    if (this.authService.login(this.username, this.password)) {
      alert('Logueado correctamente');
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Usuario o contraseña no cuentan con los parametros validos. Recuerde usar mayuscula, minuscula, número y caracter especial en la contraseña y solo letras en el usuario.');
    }
  }
}