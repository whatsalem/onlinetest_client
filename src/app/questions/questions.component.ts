import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  $.getScript('assets/js/question.js');
  }
  
}
