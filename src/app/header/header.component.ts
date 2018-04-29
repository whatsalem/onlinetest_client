import { Component, OnInit } from '@angular/core';
import {Cookies} from '@cedx/ngx-cookies';
import { Router } from '@angular/router';
import { LoginService }   from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private logins:LoginService, private cookies: Cookies, private router: Router) { }

  ngOnInit() {
  }
logout(){
this.cookies.clear();
this.router.navigate(['/login']);	
}
}
