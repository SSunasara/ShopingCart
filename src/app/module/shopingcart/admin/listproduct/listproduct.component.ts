import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData(){
    this.productService.getProducts().subscribe((res: Product[]) => 
      {
        this.products = res;
      });
  }

  delete(id: number){
    this.productService.deleteProduct(id).subscribe(data => {
      console.log(data);
      this.getProductData();
    });
    this.route.navigate(['admin/list']);
  }
}
