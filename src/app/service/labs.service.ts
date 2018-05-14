import { Injectable } from '@angular/core';
import { ApiService }   from './api.service';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class LabsService {

  constructor(private http:HttpClient, private api: ApiService) { }

    load(){
      return this.http.get(this.api.url.labs)
    }
    
    add(data1,data2){
      return this.http.post(this.api.url.labs,{labname: data1 ,labaddress:data2})
    }
    
    edit(id,data1,data2){
      return this.http.put(this.api.url.labs,{lab_id: id,labname: data1 ,labaddress:data2})
    }
    
    delete(id){
      return this.http.patch(this.api.url.labs,{lab_id: id})
    }
}
