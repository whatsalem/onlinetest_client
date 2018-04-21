import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css']
})
export class ProfileSettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  $.getScript('assets/js/admin.js');
  }

}
