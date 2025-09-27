import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-publicacion',
  imports: [],
  templateUrl: './publicacion.html',
  styleUrl: './publicacion.css'
})
export class Publicacion {
        constructor(
        public router: Router,
        public authService: AuthService 
      ) {}

}
