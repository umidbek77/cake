import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import type { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  products = signal<Product[]>([
    {
      id: 'p1',
      name: 'Red Velvet',
      price: 120000,
      imageUrl: 'goodcake.jpg',
      category: 'cake',
      shortDesc: 'Qizil barxat — yumshoq, kremli, bayram uchun zo‘r.'
    },
    {
      id: 'p2',
      name: 'Berry Cheesecake',
      price: 110000,
      imageUrl: 'Cake.png',
      category: 'dessert',
      shortDesc: 'Yengil va nordon — rezavorlar bilan.'
    },
    {
      id: 'p2',
      name: 'Berry Cheesecake',
      price: 110000,
      imageUrl: 'Cake.png',
      category: 'dessert',
      shortDesc: 'Yengil va nordon — rezavorlar bilan.'
    },
    {
      id: 'p2',
      name: 'Berry Cheesecake',
      price: 110000,
      imageUrl: 'Cake.png',
      category: 'dessert',
      shortDesc: 'Yengil va nordon — rezavorlar bilan.'
    },
    {
      id: 'p2',
      name: 'Berry Cheesecake',
      price: 110000,
      imageUrl: 'Cake.png',
      category: 'dessert',
      shortDesc: 'Yengil va nordon — rezavorlar bilan.'
    },
    {
      id: 'p3',
      name: 'Chocolate Chip',
      price: 45000,
      imageUrl: 'choclatecake.jpg',
      category: 'cookie',
      shortDesc: 'Issiq, yangi pishgan kukilar.'
    },
    {
      id: 'p3',
      name: 'Chocolate Chip',
      price: 45000,
      imageUrl: 'choclatecake.jpg',
      category: 'cookie',
      shortDesc: 'Issiq, yangi pishgan kukilar.'
    },
    {
      id: 'p3',
      name: 'Chocolate Chip',
      price: 45000,
      imageUrl: 'choclatecake.jpg',
      category: 'cookie',
      shortDesc: 'Issiq, yangi pishgan kukilar.'
    },
    {
      id: 'p3',
      name: 'Chocolate Chip',
      price: 45000,
      imageUrl: 'choclatecake.jpg',
      category: 'cookie',
      shortDesc: 'Issiq, yangi pishgan kukilar.'
    },
    {
      id: 'p4',
      name: 'Napoleon torti',
      price: 135000,
      imageUrl: 'Cake.png',
      category: 'cake',
      shortDesc: 'An’anaviy qatlamli Napoleon torti.'
    },
    {
      id: 'p4',
      name: 'Napoleon torti',
      price: 135000,
      imageUrl: 'Cake.png',
      category: 'cake',
      shortDesc: 'An’anaviy qatlamli Napoleon torti.'
    },
    {
      id: 'p4',
      name: 'Napoleon torti',
      price: 135000,
      imageUrl: 'Cake.png',
      category: 'cake',
      shortDesc: 'An’anaviy qatlamli Napoleon torti.'
    },
  ]);

  cakes = computed(() => this.products().filter(p => p.category === 'cake'));
  desserts = computed(() => this.products().filter(p => p.category === 'dessert'));
  cookies = computed(() => this.products().filter(p => p.category === 'cookie'));

  formatSum(n: number) {
    return n.toLocaleString('uz-UZ') + ' so‘m';
  }
}
