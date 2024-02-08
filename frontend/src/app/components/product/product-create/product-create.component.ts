import { Product } from './../product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['product-create.component.css', '/src/app/components/product/styles/products-forms-styles.css', '/src/app/components/product/styles/products-forms-buttons-styles.css', '/src/styles.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {} as Product;

  @ViewChild('food') matInput: MatInput = {} as MatInput;

  constructor(private productService: ProductService, private router: Router, private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Cadastrar produto',
      icon: 'arrow_back', //'add_circle_outline'
      routeUrl: '/products'
    }
  }

  ngOnInit(): void { }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto adicionado!");
      this.router.navigate(['/products'])
    });
  }

  cancel(): void {
    this.router.navigate(['/products'])

  }
}