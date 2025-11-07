import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'public-home', pathMatch: 'full' },
  {
    path: 'public-home',
    loadComponent: () =>
      import('../app/components/public-home/public-home.component').then(
        (m) => m.PublicHomeComponent
      ),
  },
  {
    path: 'sign-in',
    loadComponent: () =>
      import('../app/components/sign-in/sign-in.component').then(
        (m) => m.SignInComponent
      ),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('../app/components/sign-up/sign-up.component').then(
        (m) => m.SignUpComponent
      ),
  },
  {
    path: 'private-home',
    loadComponent: () =>
      import('../app/components/private-home/private-home.component').then(
        (m) => m.PrivateHomeComponent
      ),
  },
  {
    path: 'info',
    loadComponent: () =>
      import(
        '../app/components/informations-form/informations-form.component'
      ).then((m) => m.InformationsFormComponent),
  },
  {
    path: 'report',
    loadComponent: () =>
      import('../app/components/report/report.component').then(
        (m) => m.ReportComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('../app/components/no-page/no-page.component').then(
        (m) => m.NoPageComponent
      ),
  },
];
