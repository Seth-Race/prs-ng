import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { User } from 'src/app/model/user.class';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  title: string= 'Request Create';
  request: Request= new Request();
  requestId: number= 0;
  users: User[]= [];
  
  constructor(
    private requestSvc: RequestService, 
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(parms => this.requestId = parms["id"]);
    console.log('productId= '+this.requestId);
    this.requestSvc.get(this.requestId).subscribe(
      resp => {
          this.request= resp as Request;},
      err => {console.log(err);}        
    );

    this.userSvc.list()
    .subscribe(
      resp => {
        this.users = resp as User[];
        console.log("list of users: ", this.users);
      },
      err => {
        console.log(err);
      }
    ); 
  }

  save() {
    this.requestSvc.edit(this.request).subscribe(
      resp => {this.request= resp as Request;
              this.router.navigateByUrl('/request-list')},
      err => {console.log(err);}
    );

  }


}