import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OrderStatus {
  id: string;
  productName: string;
  currentStep: number;
}

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  steps = [
    { label: 'Qabul qilindi', desc: 'Buyurtma qabul qilindi', icon: '📦' },
    { label: 'Tayyorlanmoqda', desc: 'Oshxonada tayyorlanmoqda', icon: '👨‍🍳' },
    { label: 'Yetkazilmoqda', desc: 'Kuryer yo‘lda', icon: '🚚' },
    { label: 'Yakunlandi', desc: 'Yetkazib berildi', icon: '🎉' }
  ];

  orders = signal<OrderStatus[]>([
    { id: '1', productName: 'Red Velvet', currentStep: 1 },
    { id: '2', productName: 'Cheesecake', currentStep: 2 },
    { id: '3', productName: 'Napoleon', currentStep: 3 }
  ]);
}
