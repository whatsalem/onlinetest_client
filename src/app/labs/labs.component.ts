import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { LabsService }   from '../service/labs.service';
import { PnotifyService } from '../service/pnotify.service';

declare var $:any;

@Component({
selector: 'app-labs',
templateUrl: './labs.component.html',
styleUrls: ['./labs.component.css']
})
export class LabsComponent {
dtOptions: any= {
retrieve: true,
dom: 'Bfrtip',
buttons: [
'colvis',
'copy',
'print',
'excel',
'pdf'
]
};
data:any;
dtTrigger: Subject<any> = new Subject();

results: any;
detail: any;
title:any;

labname: any;
labaddress: any;

change_var :any;
unique_var :any;
constructor(private labs:LabsService,private pnotifyService: PnotifyService) { }

ngOnInit() {
this.pnotifyService.getPNotify().defaults.styling = 'bootstrap4';this.pnotifyService.getPNotify().defaults.icons= 'fontawesome4';
// $.getScript('assets/js/labs.js');
this.load();
}

load(){
this.labs.load().subscribe(data => {
this.results =(<any>data).data;
this.dtTrigger.next();
})
}

save_add()
{
this.labs.add(this.labname,this.labaddress).subscribe(data => 
{
this.load();
this.pnotifyService.getPNotify().success(
{
text:(<any>data).message
});

})
}

save_edit(){
this.labs.edit(this.detail.lab_id,this.labname,this.labaddress).subscribe(data => {
this.load();
this.pnotifyService.getPNotify().success({
text:(<any>data).message
});
})
}

delete(id)
{
$.confirm({
title: 'Confirm!',
content: 'Are you sure want to delete ?',
buttons: {
confirm: () => {
this.labs.delete(id).subscribe(data => {
this.load();
this.pnotifyService.getPNotify().success({
text:(<any>data).message
});
});
},
cancel: () =>{}
}
});
}

change_state()
{
if(this.change_var==1)
{
this.save_add();
}
else
{
this.save_edit();
}
}

state(state,id){
switch(state){
case 1:
this.labname=null;
this.labaddress=null;
this.change_var=1;
this.title = 'Add new';
break;
case 2:
this.detail = this.results.find(obj => obj.lab_id === id);
this.labname=this.detail.labname;
this.labaddress=this.detail.labaddress;
this.change_var=2;
this.title = 'Update';
break;
}
}

unique(){
this.unique_var = this.results.find(obj => obj.labname === this.labname);
}
}
