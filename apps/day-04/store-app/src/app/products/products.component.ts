import { Component } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  today = Date.now();

  product: Product = new Product();

  products: Product[] = [
    {
      id: 1,
      name: 'Logitech B175 Wireless Mouse',
      description: 'If you are looking for a decently priced wireless mouse that performs efficiently, then the Logitech B175 Wireless Mouse is an ideal choice',
      price: 649,
      isAvailable: true
    },
    {
      id: 2,
      name: 'LG 60cm HD Ready LED TV',
      description: 'Watch your favorite cricket tournaments, Bollywood movies, and also keep mosquito-borne diseases away with the LG 24LJ470A HD Ready LED TV',
      price: 11199,
      isAvailable: false
    },
    {
      id: 3,
      name: 'Samsung Galaxy J6',
      description: 'The Samsung Galaxy J6 is here, with its virtually continuous Bezel-free Screen, to make work and entertainment seem even more appealing',
      price: 13990,
      isAvailable: true
    }
  ];

  onSave() {
    console.log('save clicked');
    console.log('product:', this.product);
    this.products.unshift(this.product);
    this.product = new Product();
  }
}
