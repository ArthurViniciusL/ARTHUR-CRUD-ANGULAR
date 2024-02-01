import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../product.model';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {} as Product;

  constructor(private productService: ProductService, private router: Router, private urlRoute: ActivatedRoute) { }


  ngOnInit(): void {
    // Carregando os dados do produto selecionado.
    // + para converter em inteiro;
    const PRODUCT_ID = this.urlRoute.snapshot.paramMap.get('id')!;
    this.productService.readById(PRODUCT_ID).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso.');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}

