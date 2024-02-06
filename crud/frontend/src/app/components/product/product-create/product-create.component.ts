import { Product } from './../product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['product-create.component.css', 'product-create-buttons.component.css', '/src/styles.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {} as Product;

  @ViewChild('food') matInput: MatInput = {} as MatInput;

  constructor(private productService: ProductService, private router: Router, private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Cadastrar um novo Produto',
      icon: 'table_chart',
      routeUrl: ''
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