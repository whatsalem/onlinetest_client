import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-takers',
  templateUrl: './takers.component.html',
  styleUrls: ['./takers.component.css']
})
export class TakersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  $.getScript('assets/js/admin.js');
  }

}
