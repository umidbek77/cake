import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OrderStatus {
  id: string;
  productName: string;
  status: 'pending' | 'preparing' | 'delivering' | 'completed';
}

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  orders = signal<OrderStatus[]>([
    { id: '1', productName: 'Red Velvet', status: 'pending' },
    { id: '2', productName: 'Cheesecake', status: 'preparing' },
    { id: '3', productName: 'Chocolate Cookies', status: 'delivering' },
    { id: '4', productName: 'Napoleon', status: 'completed' }
  ]);

  getStatusLabel(status: string): string {
    switch (status) {
      case 'pending': return 'Buyurtma qabul qilindi ✅';
      case 'preparing': return 'Tayyorlanmoqda 👨‍🍳';
      case 'delivering': return 'Yetkazib berilmoqda 🚚';
      case 'completed': return 'Yakunlandi 🎉';
      default: return 'Noma’lum';
    }
  }

  getStatusClass(status: string): string {
    return `status ${status}`;
  }
}
