import { Injectable } from '@angular/core';
import { User } from '../model/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
    loggedInUser: User = new User();

  constructor(private router: Router) { }

//   checkLogin(): void {
//       if (this.loggedInUser.id == 0) {
//           console.log("User is not logged in.");
//           this.router.navigateByUrl("/user-login"):
//       }
//   }

}