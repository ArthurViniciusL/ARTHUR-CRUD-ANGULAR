import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css', '/src/app/components/product/styles/products-forms-styles.css', '/src/app/components/product/styles/products-forms-buttons-styles.css', '/src/styles.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {} as Product;

  constructor(private productService: ProductService, private router: Router, private urlRoute: ActivatedRoute, private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Editar produto',
      titleColor: 'var(--crudIconViewBlue)',
      icon: 'arrow_back',// icon: 'edit',
      routeUrl: '/products'
    }
  }
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
      this.productService.showMessage('Produto editado com sucesso!');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}

