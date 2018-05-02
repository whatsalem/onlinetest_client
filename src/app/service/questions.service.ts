import { Injectable } from '@angular/core';
import { ApiService }   from './api.service';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class QuestionsService {

constructor(private http:HttpClient,private api:ApiService) { }

load(){
return this.http.get(this.api.url.questions);
}

}
