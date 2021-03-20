import { Injectable } from '@angular/core';
import {ProductDto} from '../model/product.dto';
import {findIndex} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<ProductDto> = [
    {
      id: 1,
      name: 'Phone XL',
      description: 'A large phone with one of the best screens',
      price: 1290.99,
      rating: 3.9
    },
    {
      id: 2,
      name: 'Phone Mini',
      description: 'A great phone with one of the best cameras',
      price: 1190.00,
      rating: 4.3
    },
    {
      id: 3,
      name: 'Phone XXL',
      description: 'A large phone with one of the best screens',
      price: 190.99,
      rating: 5
    },
    {
      id: 4,
      name: 'Phone XXL Mini',
      description: 'A great phone with one of the best cameras',
      price: 1190.00,
      rating: 4.3
    },
    {
      id: 5,
      name: 'Phone XL mini rs',
      description: 'A large phone with one of the best screens',
      price: 1290.99,
      rating: 3.9
    },
    {
      id: 6,
      name: 'Samsung Mini ss',
      description: 'A great phone with one of the best cameras',
      price: 590.00,
      rating: 4.7
    },
    {
      id: 7,
      name: 'Phone XL s',
      description: 'A large phone with one of the best screens',
      price: 590.99,
      rating: 4.9
    },
    {
      id: 8,
      name: 'Phone Mini s',
      description: 'A great phone with one of the best cameras',
      price: 790.00,
      rating: 4.1
    }

  ];

  constructor() { }

  getAllProduct(): Array<ProductDto> {
    return this.products;
  }

  getProductById(productId: number): any {
    const productIndex = findIndex(this.products, {id: productId});
    if (productIndex !== -1) {
      return this.products[productIndex];
    } else {
      return null;
    }
  }
}
