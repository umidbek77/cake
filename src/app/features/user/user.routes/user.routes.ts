import { UserLayoutComponent } from './../../../layouts/user-layout/user-layout.component';
import { StatusComponent } from './../pages/status/status.component';
import { OrderComponent } from './../pages/order/order.component';
import { MenuComponent } from './../pages/menu/menu.component';
import { HomeComponent } from './../pages/home/home.component';
import { Routes } from '@angular/router';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'order', component: OrderComponent },
      { path: 'status', component: StatusComponent },
    ],
  },
];
