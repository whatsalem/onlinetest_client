import { Component, OnInit } from '@angular/core';
import { ApiService }   from '../service/api.service';
declare var $:any;
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private api:ApiService) { }
ngOnInit() {
	$.getScript('assets/js/app.js');
	this.api.checktoken();
  }

}
