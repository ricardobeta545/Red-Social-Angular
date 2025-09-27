import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-perfil',
  imports: [],
  standalone: true,
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})

export class Perfil implements OnInit {
  username: string = '';

  constructor(
    public router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
      this.authService.validateOnAction();
    this.username = this.authService.getUsername();
    console.log("Username en perfil:", this.username);
  }
}
