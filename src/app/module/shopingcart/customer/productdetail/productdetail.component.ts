import { CartService } from './../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../product/product.service';
import { Component, OnInit, Provider } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Cart } from '../../interfaces/cart';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  id: number;
  product: Product;
  cart: Cart;
  constructor(
    private productService: ProductService, 
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      param => this.id = parseInt(param.get('id'))
    );
    console.log(this.id);
    this.getDetails(this.id);
  }

  getDetails(id: number) {
    this.productService.getProductDetails(id).subscribe(data => {
      this.product = data;
      console.log(this.product);
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
