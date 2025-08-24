import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// Hozircha biz "mock" user rolini localStorage yoki Firebase'dan olamiz
// Keyinchalik Firebase Auth bilan bog'laymiz
export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Route config ichida belgilangan role (masalan: data: { role: 'admin' })
  const expectedRole = route.data?.['role'];

  // Foydalanuvchi ma'lumotlari (demo uchun localStorage'dan)
  const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  const currentRole = currentUser.role; // 'user' | 'curer' | 'admin'

  // Agar foydalanuvchi login qilmagan bo‘lsa → login sahifaga yuboramiz
  if (!currentRole) {
    router.navigate(['/auth/login']);
    return false;
  }

  // Agar role mos kelmasa → kirishni taqiqlaymiz
  if (expectedRole && currentRole !== expectedRole) {
    router.navigate(['/unauthorized']); // 403 sahifa yaratib qo‘yamiz
    return false;
  }

  return true; // role mos bo‘lsa sahifaga kiritamiz
};
