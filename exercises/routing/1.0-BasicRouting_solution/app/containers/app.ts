import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import UserDetail from '../components/user-detail';
import UserList from '../components/user-list';
import CompanyList from '../components/company-list';
import Users from '../services/users-service';
import Home from '../components/home';
@Component({
  selector: 'ngc-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [Users],
  template: `<div>
  Basic Routing
  <ul>
   <li>
      <a [routerLink]="['Home']">Home</a>
    </li>
    <li>
      <a [routerLink]="['UserList']">Users List</a>
    </li>
    <li>
      <a [routerLink]="['CompanyList']">Company List</a>
    </li>
  </ul>
  <div style="border: 1px solid black">
    <router-outlet></router-outlet>
  </div>
	`})
@RouteConfig([
  {path: '/', as: 'Home', component: Home},
  {path: '/users', as: 'UserList', component: UserList},
  {path: '/users/:id', as: 'UserDetail', component: UserDetail},
  {path: '/companies', as: 'CompanyList', component: CompanyList}
  ])
export class App {
  public userNames: any;
  constructor(private _users: Users) {
    
  }
  ngOnInit() {
   this.userNames = this._users.getUserNames();
  }
}