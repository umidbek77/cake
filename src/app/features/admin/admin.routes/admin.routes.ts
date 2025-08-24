import { DashboardComponent } from './../../curer/pages/dashboard/dashboard.component';
import { OrdersComponent } from './../pages/orders/orders.component';
import { CurersComponent } from './../pages/curers/curers.component';
import { ProductsComponent } from './../../curer/pages/products/products.component';
import { ReportsComponent } from './../pages/reports/reports.component';
import { AdminLayoutComponent } from './../../../layouts/admin-layout/admin-layout.component';
import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'curers', component: CurersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'reports', component: ReportsComponent },
    ],
  },
];
