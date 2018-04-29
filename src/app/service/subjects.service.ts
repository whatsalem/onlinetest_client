import { Injectable } from '@angular/core';
import { ApiService }   from './api.service';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class SubjectsService {
constructor(private http:HttpClient,private api:ApiService) { }

load(){
return this.http.get(this.api.url.subjects)
}

add(data1,data2){
return this.http.post(this.api.url.subjects,{subcode: data1 ,subname:data2})
}

edit(id,data1,data2){
return this.http.put(this.api.url.subjects,{sub_id: id,subcode: data1 ,subname:data2})
}

delete(id){
return this.http.patch(this.api.url.subjects,{sub_id: id})
}


}
