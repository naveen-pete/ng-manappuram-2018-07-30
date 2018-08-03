import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product();
  showMessage: boolean = false;

  // @Output() productCreated: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private loggerService: LoggerService, private productsService: ProductsService) {}

  ngOnInit() {}

  onSave() {
    // const loggerService = new LoggerService();
    this.loggerService.log('New product created. Emitting productCreated event.');

    // this.productCreated.emit(this.product);
    this.productsService.addProduct(this.product);
    this.product = new Product();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 5000);
  }
}
