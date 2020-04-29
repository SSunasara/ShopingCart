import { Product } from './../../interfaces/product';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';
import { Cart } from '../../interfaces/cart';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(
    private productService: ProductService, 
    private router: Router,
    private cartService: CartService
    ) { }

  products: Product[];
  cart: Cart;
  ngOnInit(): void {
    this.getProductData();
  }

  getProductData(){
    this.productService.getProducts().subscribe((res: Product[]) => 
      {
        this.products = res;
      });
  }

  addToCart(product: Product){
    
    this.cart = {
      id : null,
      productId : product.id,
      productName : product.ProdName, 
      customer : "Sunasara",
      description : "Something Describ"
    }
    this.cartService.addToCart(this.cart).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['customer/cart']);
  }
}
