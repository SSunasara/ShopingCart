import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { Cart} from './../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  headerOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  private handleError(error: any) {
    console.error(`%c Error occured ${error}`, 'color: red');
    return throwError(error);
  }

  cartData: Cart;
  baseURL = 'http://localhost:3000/';

  addToCart(item: Cart): Observable<Cart>{
    return this.http.post<Cart>(this.baseURL + "Cart", item, this.headerOption).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.baseURL + "Cart", this.headerOption).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  deleteProduct(id: number){
    return this.http.delete<Cart>(this.baseURL + "Cart" + `/${id}`, this.headerOption).pipe(
      tap(),
      catchError(this.handleError)
    );
  }
}
