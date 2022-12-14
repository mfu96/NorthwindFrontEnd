import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/services/product.service';
//Componenetlerimiz dataları yönetmek ile ilgilenir
//html ise o data'ları kullanır

//tüm injection'lar için app.module.ts'de import
// ediyor olması grekli

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products:Product[] = [];
  dataLoaded=false;
  filterText="";
 
  // productResponseModel:ProductResponseModel={
  //   data:this.products,
  //   message:"",
  //   success:true
  // };
  constructor(private productService:ProductService,
    private activateedRoute:ActivatedRoute,
    private toastrService:ToastrService) { }
                          //ActivatedRoute seçilen katgoriyi okumak için
  ngOnInit(): void {
   
    this.activateedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }
      else{this.getProducts()}
    })
  }
// getProduct'ın nasıl çalıştığı 17.gün 1.47'de anlatılıyor
//getProduct bir Obsevable döndürüyor yani ona subscribe olablilirsin demek
  getProducts()
  {this.productService.getProducts().subscribe(response=>   //Methodun senkron ve asekron çalışması ile
                                                            //ilgli 17. gün 2.52 hayti önem taşıyor
    {    
      this.products=response.data
      this.dataLoaded=true
    }) 
  }

  getProductsByCategory(categoryId:number)
  {this.productService.getProductsByCategory(categoryId).subscribe(response=>   //Methodun senkron ve asekron çalışması ile
                                                            //ilgli 17. gün 2.52 hayti önem taşıyor
    {    
      this.products=response.data
      this.dataLoaded=true
    }) 
  }

  addToCart(product:Product){
    this.toastrService.success("Sepete Eklendi", product.productName )
   // console.log(product)

  }

}
