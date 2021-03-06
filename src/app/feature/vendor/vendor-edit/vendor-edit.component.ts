import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  title: string='Vendor-Edit';
  vendor: Vendor = new Vendor();
  submitBtnTitle: string='Edit';
  vendorId=0;

  constructor(
    private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.vendorId = parms["id"]);
    this.vendorSvc.get(this.vendorId).subscribe(
      resp => {
        this.vendor = resp as Vendor;},
        err => {console.log(err);}
    );
  }

  save(){
    this.vendorSvc.edit(this.vendor).subscribe(
      resp => {this.vendor = resp as Vendor;
               this.router.navigateByUrl('/vendor-list');
      },
      err => {console.log(err)}
    );
  }

  delete(){
    this.vendorSvc.delete(this.vendorId).subscribe(
      resp => {
        this.vendor = resp as Vendor;
        this.router.navigateByUrl('/vendor-list');
      },
      err => {console.log(err)}
    );
  }

}
