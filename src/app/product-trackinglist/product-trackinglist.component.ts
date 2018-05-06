import { Component, OnInit } from '@angular/core';
import {Album} from '../album';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-trackinglist',
  templateUrl: './product-trackinglist.component.html',
  styleUrls: ['./product-trackinglist.component.css']
})
export class ProductTrackinglistComponent implements OnInit {

  albumInfo: Album;

  constructor(private _productService: ProductService) {
     _productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

  ngOnInit() {
  }

}
