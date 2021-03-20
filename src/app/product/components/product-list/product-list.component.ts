import {Component, OnInit} from '@angular/core';
import {ProductDto} from '../../model/product.dto';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  cats = 'besiktas';
  price = 12;

  products: Array<ProductDto> = new Array<ProductDto>();

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getAllProduct();
  }

  // add to cart
  addToCart(): void {
    this.price += 1;
  }

}
