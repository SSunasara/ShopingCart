import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  name;
  price;
  image;
  detail;
  item: Product;
  constructor(
    private productService: ProductService,
    private router: Router
  ) {   }

  ngOnInit(): void {
  }

  addProduct(){
    this.item = {
      id: null, 
      Price:this.price, 
      ProdName:this.name, 
      Image:this.image,
      Detail: this.detail
    };
    this.productService.addProduct(this.item).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['admin/list']);
  }
}
