import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ProductDto} from '../../model/product.dto';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail: ProductDto = new ProductDto();

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productDetail = this.productService.getProductById(parseInt(id));
  }

}
