import { Component, EventEmitter, Input, Output, effect, input, output } from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

   // @Input({ required: true })
   // product!: Product;

   public product = input.required<Product>();

   // @Output()
   // public onIncrementQuntity = new EventEmitter<number>();

   public onIncrementQuantity = output<number>();

   public incrementQuantity(): void {
      this.onIncrementQuantity.emit( this.product().quantity + 1 );
   }

   public loginEffect = effect( () => {
      console.log(this.product().name);
   })





}
