import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public readonly TIMEOUT = 60000; 

  constructor(public router: Router) {}

  login(username: string, password: string): boolean {
    const usernameRegex = /^[A-Za-z]+$/; 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/;

    if (usernameRegex.test(username) && passwordRegex.test(password)) {
    const token = this.generateToken();
    const expiresAt = new Date().getTime() + this.TIMEOUT; 
    localStorage.setItem('token', token);
    localStorage.setItem('expiresAt', expiresAt.toString());

    // 🔹 Guardamos el nombre de usuario
    localStorage.setItem('username', username);

    return true;

    }   
    return false;
    }

    public generateToken(): string {
        return Math.random().toString(36).substring(2);
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiresAt');
        this.router.navigate(['/login']);
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }

    isTokenValid(): boolean {
        const token = localStorage.getItem('token');
        const expiresAt = localStorage.getItem('expiresAt');

        if (!token || !expiresAt) {
        return false;
        }
        return new Date().getTime() < Number(expiresAt);
    }

    validateOnAction(): boolean {
        if (!this.isTokenValid()) {
        alert('La sesión ha terminado, por favor inicie sesión de nuevo');
        this.logout();
        return false;
        }

        const newExpiresAt = new Date().getTime() + this.TIMEOUT;
        localStorage.setItem('expiresAt', newExpiresAt.toString());
        return true;
    }
    getUsername(): string {
    return localStorage.getItem('username') || '';
    }
    }
