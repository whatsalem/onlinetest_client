import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {Cookies} from '@cedx/ngx-cookies';

@Injectable()
export class ApiService {
constructor(private cookies : Cookies, private router: Router) { }
baseUrl='http://localhost:3000/';

checktoken(){
if(this.cookies.length==0 || this.cookies.getObject('user', false).expired_time < Date.now()){
this.router.navigate(['/login']);
}
else{
this.router.navigate(['/subjects']);		
}
}
url ={
login:this.baseUrl + 'login',
subjects:this.baseUrl +'api/subjects',
questions:this.baseUrl +'api/questions'
}

}
