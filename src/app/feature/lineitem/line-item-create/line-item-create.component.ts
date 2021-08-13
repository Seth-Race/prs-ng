import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LineItem } from 'src/app/model/line-item.class';
import { Product } from 'src/app/model/product.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { ProductService } from 'src/app/service/product.service';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {

  title:string= 'LineItem Create';
  lineitem:LineItem= new LineItem();
  request:Request= new Request();
  product:Product= new Product();

  constructor(
    private lineItemSvc: LineItemService,
    private requestSvc: RequestService,
    private productSvc: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.requestSvc.list().subscribe(
      // resp => {this.request = resp as Request();}
    );
  }

  save() {
    this.lineItemSvc.create(this.lineitem).subscribe(
      resp => {this.lineitem= resp as LineItem;
               this.router.navigateByUrl('/request-list')},
      err => {console.log(err);}
    );
  }

}
