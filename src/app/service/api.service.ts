import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  constructor() { }
baseUrl='https://jaychou.herokuapp.com/api/';
subjects = {url : this.baseUrl + 'subjects'}
}
