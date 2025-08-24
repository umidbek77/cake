import { Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import type { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

  // Mock productlar (home.component bilan bir xil bo‘lsin)
  products: Product[] = [
    { id: 'p1', name: 'Red Velvet', price: 120000, imageUrl: 'assets/cakes/red-velvet.jpg', category: 'cake', shortDesc: 'Qizil barxat — yumshoq, kremli.' },
    { id: 'p2', name: 'Chocolate Dream', price: 135000, imageUrl: 'assets/cakes/choco.jpg', category: 'cake', shortDesc: 'Shokoladli lazzat — klassika.' },
    { id: 'p3', name: 'Berry Cheesecake', price: 110000, imageUrl: 'assets/desserts/cheesecake.jpg', category: 'dessert', shortDesc: 'Yengil va nordon — rezavorlar bilan.' },
  ];

  // URL’dagi productId ni olish
  productId = this.route.snapshot.queryParamMap.get('productId');
  product = this.products.find(p => p.id === this.productId);

  // Form
  orderForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^(\+998|8)[0-9]{9}$/)]],
    address: ['', Validators.required],
    quantity: [1, [Validators.required, Validators.min(1)]],
    comment: ['']
  });

  submitOrder() {
    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }

    console.log('Buyurtma yuborildi:', {
      product: this.product,
      ...this.orderForm.value
    });

    alert('✅ Buyurtmangiz qabul qilindi!');
    this.orderForm.reset({ quantity: 1 });
  }
}
