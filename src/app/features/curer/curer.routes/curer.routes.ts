import { CurerLayoutComponent } from './../../../layouts/curer-layout/curer-layout.component';
import { MyOrdersComponent } from './../pages/my-orders/my-orders.component';
import { ProductsComponent } from './../pages/products/products.component';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { Routes } from '@angular/router';

export const CURER_ROUTES: Routes = [
  {
    path: '',
    component: CurerLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'my-orders', component: MyOrdersComponent },
    ],
  },
];
