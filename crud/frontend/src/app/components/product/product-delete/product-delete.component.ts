import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {} as Product;

  constructor(private productService: ProductService, private router: Router, private urlRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // + para converter em inteiro;
    const PRODUCT_ID = this.urlRoute.snapshot.paramMap.get('id')!;
    this.productService.readById(PRODUCT_ID).subscribe(product => {
      this.product = product;
    });

  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.product.id!).subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso!");
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }


}
