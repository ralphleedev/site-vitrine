import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RoutePaths } from './shared/constants/route-segments';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: RoutePaths.home, loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
      { path: RoutePaths.about, loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
      { path: RoutePaths.projects, loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent) },
      { path: RoutePaths.contact, loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
      { path: '**', redirectTo: '' }
    ]
  }
];
