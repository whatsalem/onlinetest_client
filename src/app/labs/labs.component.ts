import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  $.getScript('assets/js/admin.js');
  }

}
