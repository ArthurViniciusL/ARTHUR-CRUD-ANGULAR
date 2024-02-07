import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Product } from '../product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css', '/src/app/components/product/styles/products-forms-styles.css', '/src/app/components/product/styles/products-forms-buttons-styles.css', '/src/styles.css']
})
export class ProductTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  products: Product[] = [];
  displayedColumns = ['delete','numId', 'id', 'name', 'price', 'edit'];
  
  constructor(private productService: ProductService) { }

  ngAfterViewInit(): void {
    // carregando os dados
    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(products)
    })
  }
}




