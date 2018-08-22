import { Routes } from '@angular/router';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'home/two', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    loadChildren: './views/home/home.module#HomeModule'
  },
  { 
    path: '**', 
    redirectTo: 'home/two'
  }
];

