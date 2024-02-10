import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.model';
import { EMPTY, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // BASE_URL = 'http://localhost:3001/products';
  BASE_URL = 'https://crud-angular-api-six.vercel.app/products'

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'ⓧ', {
      duration: 30000,
      verticalPosition: "bottom",
      horizontalPosition: "end"
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.BASE_URL, product).pipe(map(obj => obj), catchError(e => this.errorLoad(e)));
  }

  errorLoad(e: any): Observable<any> {
    console.log(e);
    this.showMessage("Ocorreu um error não tratado!", true)
    return EMPTY;
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL);
  }

  readById(id: string): Observable<Product> {
    const ID_URL = `${this.BASE_URL}/${id}`;
    return this.http.get<Product>(ID_URL);
  }

  update(product: Product): Observable<Product> {
    const ID_URL = `${this.BASE_URL}/${product.id}`;
    return this.http.put<Product>(ID_URL, product);
  }

  deleteProduct(id: string): Observable<Product> {
    const ID_URL = `${this.BASE_URL}/${id}`;
    return this.http.delete<Product>(ID_URL);
  }
}

