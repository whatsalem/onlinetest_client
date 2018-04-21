import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-user-types',
  templateUrl: './user-types.component.html',
  styleUrls: ['./user-types.component.css']
})
export class UserTypesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  $.getScript('assets/js/admin.js');
  }

}
