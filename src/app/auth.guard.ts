import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (this.authService.isTokenValid()) {
      this.authService.validateOnAction();
      return true;
    } else {
      alert('Tu sesión ha expirado, inicia sesión de nuevo');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
