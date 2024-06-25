import { Component, OnDestroy, signal } from '@angular/core';
import { Product } from '@interfaces/product.interface';
import { TitleComponent } from '@shared/title/title.component';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { interval, take, tap } from 'rxjs';

@Component({
   selector: 'app-frm-input-output',
   standalone: true,
   imports: [
      TitleComponent,
      ProductCardComponent,
   ],
   templateUrl: './frm-input-output.component.html',
   styleUrl: './frm-input-output.component.css'
})
export class FrmInputOutputComponent implements OnDestroy {

   public products = signal<Product[]>([
      {
         id: 1,
         name: 'Product 1',
         price: 10,
         quantity: 0,
      },
      {
         id: 2,
         name: 'Product 2',
         price: 8,
         quantity: 0,
      }
   ]);

   private intervalSubscription = interval(1000).pipe(
      tap(() => {
         this.products.update((products) => [
            ...products,
            {
               id: products.length + 1,
               name: `Product ${products.length + 1}`,
               price: 0,
               quantity: 0,
            },
         ])

      }),
      take(8)
   ).subscribe();

   ngOnDestroy(): void {

      this.intervalSubscription.unsubscribe();

   }

   updateProduct(product: Product, newQuantity: number): void {
      this.products.update( (products) =>
         products.map( (item) => item.id === product.id ? {...item, quantity: newQuantity} : item)
      );

   }

}
