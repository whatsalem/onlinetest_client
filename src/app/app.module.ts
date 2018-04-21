import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { SubjectsService }   from './service/subjects.service';
import { ApiService }   from './service/api.service';

import { MasterComponent } from './master/master.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { UserTypesComponent } from './user-types/user-types.component';
import { UsersComponent } from './users/users.component';
import { LabsComponent } from './labs/labs.component';
import { SemestersComponent } from './semesters/semesters.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TakersComponent } from './takers/takers.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';

import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    UserTypesComponent,
    UsersComponent,
    LabsComponent,
    SemestersComponent,
    SubjectsComponent,
    TakersComponent,
    ProfileSettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [ApiService,SubjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
