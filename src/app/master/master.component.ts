import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor() { }
ngOnInit() {
	$.getScript('assets/js/app.js');
  }

}
