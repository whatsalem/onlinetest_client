import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-semesters',
  templateUrl: './semesters.component.html',
  styleUrls: ['./semesters.component.css']
})
export class SemestersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  $.getScript('assets/js/admin.js');
  }

}
