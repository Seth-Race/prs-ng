import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      new MenuItem("User", "/user-list", "Users"),
      new MenuItem("Vendor", "/vendor-list", "Vendors"),
      new MenuItem("Product", "/product-list", "Products"),
      new MenuItem("Request", "/request-list", "Requests"),
      new MenuItem("Lineitem", "/lineitem-list", "Line-Items"),
      new MenuItem("Login", "/login", "Login")
    ]
  }

}
