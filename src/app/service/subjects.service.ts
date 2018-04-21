import { Injectable } from '@angular/core';
import { ApiService }   from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class SubjectsService {

constructor(private http:HttpClient,private api:ApiService) { }
load(){
return this.http.get(this.api.subjects.url,this.api.headers)
 })
}

add(data1,data2){
return this.http.post(this.api.subjects.url,{subcode: data1 ,subname:data2})
}

delete(id){
return this.http.patch(this.api.subjects.url,{sub_id: id})
}

}
