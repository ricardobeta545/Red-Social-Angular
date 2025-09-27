import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



interface Publicacion {
    id: number;
    titulo: string;
    descripcion: string;
    categoria: string;
    likes: number;
    comentarios: any[];
    fecha: Date;
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.css'],
    standalone: true,
    imports: [CommonModule, FormsModule] 
})
export class Dashboard implements OnInit {


  publicaciones: Publicacion[] = [
    {
      id: 1,
      titulo: 'Descubren fósil gigante',
      descripcion: 'Un nuevo dinosaurio ha sido descubierto en Patagonia...',
      categoria: 'Noticias',
      likes: 0,
      comentarios: [],
      fecha: new Date('2025-09-20')
    },
    {
      id: 2,
      titulo: 'Foro sobre Tiranosaurios',
      descripcion: 'Debate sobre los hábitos alimenticios del T-Rex...',
      categoria: 'Foros',
      likes: 0,
      comentarios: [],
      fecha: new Date('2025-09-21')
    },
    {
      id: 3,
      titulo: 'Galería de fósiles',
      descripcion: 'Fotos increíbles de fósiles de dinosaurios...',
      categoria: 'Galerías',
      likes: 0,
      comentarios: [],
      fecha: new Date('2025-09-22')
    },
    {
      id: 4,
      titulo: 'Caso de estudio: Velociraptor',
      descripcion: 'Analizamos el comportamiento del Velociraptor en su ecosistema...',
      categoria: 'Casos de estudio',
      likes: 0,
      comentarios: [],
      fecha: new Date('2025-09-23')
    },
    {
      id: 5,
      titulo: 'Noticias: Parque Jurásico',
      descripcion: 'Se inaugura un nuevo parque temático...',
      categoria: 'Noticias',
      likes: 0,
      comentarios: [],
      fecha: new Date('2025-09-24')
    },
    {
      id: 6,
      titulo: 'Foro: Alimentación de herbívoros',
      descripcion: 'Comparte tus teorías sobre lo que comían los herbívoros...',
      categoria: 'Foros',
      likes: 0,
      comentarios: [],
      fecha: new Date('2025-09-25')
    },
    {
      id: 7,
      titulo: 'Descubrimiento: Nuevo fósil de dinosaurio',
      descripcion: 'Se encuentra un nuevo fósil de dinosaurio en las montañas...',
      categoria: 'Noticias',
      likes: 0,
      comentarios: [],
      fecha: new Date('2025-09-26')
    }
  ];

  publicacionesFiltradas: Publicacion[] = [];
  selectedCategory = 'all';
  sortOrder = 'recientes';

  constructor(
  public router: Router,
  private authService: AuthService
  ) {}
  

  ngOnInit() {
    this.authService.validateOnAction();
    this.publicacionesFiltradas = [...this.publicaciones];
  }

  
  VerInfo(id: number) {
    this.router.navigate(['./publicacion/', id]);
    
  }

  filtrarPorCategoria() {
    if (this.selectedCategory === 'all') {
      this.publicacionesFiltradas = [...this.publicaciones];
    } else {
      this.publicacionesFiltradas = this.publicaciones.filter(
        p => p.categoria === this.selectedCategory
      );
    }
    this.ordenarPublicaciones();
  }

  
  ordenarPublicaciones() {
    if (this.sortOrder === 'recientes') {
      this.publicacionesFiltradas.sort(
        (a, b) => b.fecha.getTime() - a.fecha.getTime()
      );
    } else if (this.sortOrder === 'populares') {
      this.publicacionesFiltradas.sort((a, b) => b.likes - a.likes);
    }
  }

 
  darLike(post: Publicacion, event: Event) {
    event.stopPropagation(); 
    post.likes += 1; 
  }

  IrPerfil() {
    this.router.navigate(['./perfil']);
  }

}

