import { ProductService } from './../../product/product.service';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  id: number;
  product: Product;
  image: string = null;
  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
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
      this.image = this.product.Image;
      console.log(this.product);
    });
  }

  update(id: number){
    if(this.image != '')
      this.product.Image = this.image;
    this.productService.updateProduct(this.product).subscribe(data => {
      this.product = data;
    });
    this.router.navigate(['admin/list']);
  }
}
