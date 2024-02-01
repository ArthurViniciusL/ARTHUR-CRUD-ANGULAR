import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';


@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})

export class ProductCrudComponent {

  // injetando as dependencias
  constructor(private router: Router, private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Cadastro',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
    //console.log('works');
  }
}
