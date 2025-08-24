import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import type { Product } from '../../../../core/models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // Mock data (keyin Firestore'dan keladi)
  products = signal<Product[]>([
    {
      id: 'p1',
      name: 'Red Velvet',
      price: 120000,
      imageUrl: 'assets/image.png',
      category: 'cake',
      shortDesc: 'Qizil barxat — yumshoq, kremli, bayram uchun zo‘r.',
    },
    {
      id: 'p2',
      name: 'Chocolate Dream',
      price: 135000,
      imageUrl: 'assets/cakes/choco.jpg',
      category: 'cake',
      shortDesc: 'Shokoladli lazzat — klassika.',
    },
    {
      id: 'p3',
      name: 'Berry Cheesecake',
      price: 110000,
      imageUrl: 'assets/desserts/cheesecake.jpg',
      category: 'dessert',
      shortDesc: 'Yengil va nordon — rezavorlar bilan.',
    },
    {
      id: 'p4',
      name: 'Macaron Box (6)',
      price: 70000,
      imageUrl: 'assets/desserts/macarons.jpg',
      category: 'dessert',
      shortDesc: 'Rang-barang makaronlar to‘plami.',
    },
    {
      id: 'p5',
      name: 'Chocolate Chip Cookies (8)',
      price: 45000,
      imageUrl: 'assets/cookies/cookies.jpg',
      category: 'cookie',
      shortDesc: 'Issiq, yangi pishgan kukilar.',
    },
  ]);

  // Signals
  q = signal<string>('');
  category = signal<'all' | Product['category']>('all');
  sort = signal<'popular' | 'price-asc' | 'price-desc'>('popular');

  // UI uchun model (ngModel binding)
  qModel = this.q();
  categoryModel = this.category();
  sortModel = this.sort();

  // Computed
  filtered = computed(() => {
    let list = this.products();
    const q = this.q().trim().toLowerCase();
    const c = this.category();

    if (c !== 'all') list = list.filter((p) => p.category === c);
    if (q)
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q)
      );

    if (this.sort() === 'price-asc')
      list = [...list].sort((a, b) => a.price - b.price);
    if (this.sort() === 'price-desc')
      list = [...list].sort((a, b) => b.price - a.price);

    return list;
  });

  formatSum(n: number) {
    return n.toLocaleString('uz-UZ') + ' so‘m';
  }
}
