import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  today = Date.now();

  products: Product[] = [];

  constructor(private loggerService: LoggerService, private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onDelete(product) {
    const i = this.products.indexOf(product);
    this.products.splice(i, 1);
  }

  // onProductCreated(newProduct: Product) {
  //   const lastItemIndex = this.products.length - 1;
  //   const id = this.products.length > 0 ? this.products[lastItemIndex].id + 1 : 1 ;
  //   newProduct.id = id;
  //   this.products.push(newProduct);

  //   // const loggerService = new LoggerService();
  //   this.loggerService.log('New product object received and added to the the array.');
  // }
}
