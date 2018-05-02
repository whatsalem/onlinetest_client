import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { QuestionsService }   from '../service/questions.service';
declare var $:any;
@Component({
selector: 'app-questions',
templateUrl: './questions.component.html',
styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

data:any;
dtTrigger: Subject<any> = new Subject();

results: any;

constructor(private questions:QuestionsService) { }

ngOnInit() {
$.getScript('assets/js/questions.js');
this.load();
}

load(){
this.questions.load().subscribe(data => {
this.results =(<any>data).data;
this.dtTrigger.next();
})
}

}
