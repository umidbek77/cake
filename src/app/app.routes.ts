import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./features/user/user.routes/user.routes').then((m) => m.USER_ROUTES),
  },
  {
    path: 'curer',
    loadChildren: () =>
      import('./features/curer/curer.routes/curer.routes').then((m) => m.CURER_ROUTES),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.routes/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full',
  },

  {
  path: 'user/order',
  loadComponent: () => import('./features/user/pages/order/order.component').then(m => m.OrderComponent)
}

];
