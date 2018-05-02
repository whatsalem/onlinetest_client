import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('assets/js/true_false.js');
  }
}
