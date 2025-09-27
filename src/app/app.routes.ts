import { Routes } from '@angular/router';
import {Login} from "./login/login"
import { Dashboard } from './dashboard/dashboard';
import { Perfil} from './perfil/perfil';
import { Publicacion} from './publicacion/publicacion'
import { AuthGuard } from './auth.guard';

 
export const routes: Routes = [

    {
        path: 'login',
        component: Login
    },

    {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [AuthGuard]
    },
        {
    path: 'perfil',
    component: Perfil,
    canActivate: [AuthGuard]
    },
    {
    path: 'publicacion/:id',
    component: Publicacion,
    canActivate: [AuthGuard]
    },

    {
    path: '**',
    redirectTo: 'login' 
    },
];
