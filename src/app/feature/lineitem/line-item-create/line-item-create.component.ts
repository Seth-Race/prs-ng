import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/line-item.class';
import { Product } from 'src/app/model/product.class';
import { Request } from 'src/app/model/request.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { ProductService } from 'src/app/service/product.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {

  title:string= 'LineItem Create';
  lineItem:LineItem= new LineItem();
  request:Request= new Request();
  products: Product[] = [];
  requestId: number = 0;

  constructor(
    private lineItemSvc: LineItemService,
    private requestSvc: RequestService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.requestId = parms["id"]);
    console.log('line item create, id = '+this.requestId);
    this.requestSvc.get(this.requestId).subscribe(
      resp => { 
        this.lineItem.request = resp as Request;
        console.log("Line Item Create, request for LI:",this.lineItem.request);
       },
      err => { console.log(err); }
    );
  

  this.productSvc.list().subscribe(
    resp => { this.products = resp as Product[]; },
    err => { console.log(err); }
  );
}

  save() {
    this.lineItemSvc.create(this.lineItem).subscribe(
      resp => {this.lineItem= resp as LineItem;
               this.router.navigateByUrl('/request-list')},
      err => {console.log(err);}
    );
  }

}
