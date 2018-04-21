import { Component, OnInit } from '@angular/core';
import { SubjectsService }   from '../service/subjects.service';
import { NgForm }   from '@angular/forms';
declare var $:any;
@Component({
selector: 'app-subjects',
templateUrl: './subjects.component.html',
styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
results: any;
detail: any;
subjectcode: any;
subjectname: any;
parent_id:any;
data:any;
constructor(private subjects:SubjectsService) { }

ngOnInit() {
$.getScript('assets/js/admin.js');
this.load();
}
load(){
this.subjects.load().subscribe(data => {
this.results=data;
})
}
add(){
this.subjects.add(this.subjectcode,this.subjectname).subscribe(data => {
this.load();
})
}

state(state,id){
switch(state){
case 1:
this.subjectcode=null;
this.subjectname=null;
this.parent_id=null;
break;
case 2:
this.detail = this.results.find(obj => obj.sub_id === id);
this.subjectcode=this.detail.subcode;
this.subjectname=this.detail.subname;
this.parent_id=this.detail.parent_id;
break;
}
}

delete(id){
this.subjects.delete(id).subscribe(data => {
console.log(data);
this.load();
})
}

}