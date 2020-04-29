import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../../interfaces/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: Cart[];
  constructor(
    private cartService: CartService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getCartData();
  }

  getCartData(){
    this.cartService.getCarts().subscribe((res: Cart[]) => 
      {
        this.carts = res;
      });
  }

  deleteCart(id: number){
    this.cartService.deleteProduct(id).subscribe(data => {
      console.log(data);
      this.getCartData();
    });
    this.router.navigate(['customer/cart']);
  }
}
