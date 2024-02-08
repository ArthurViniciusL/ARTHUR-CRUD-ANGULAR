import { HeaderService } from './../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css', '/src/app/components/product/styles/products-forms-styles.css', '/src/app/components/product/styles/products-forms-buttons-styles.css', '/src/styles.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {} as Product;

  constructor(private productService: ProductService, private router: Router, private urlRoute: ActivatedRoute, private headerSercvice: HeaderService) {
    this.headerSercvice.headerData = {
      title: 'Excluir produto',
      titleColor: 'red',
      icon: 'arrow_back', // icon: 'delete',
      iconMsg: 'Voltar',
      routeUrl: '/products'
    }
  }

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
