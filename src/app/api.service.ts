import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Swit } from './swit';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {
  

  constructor (private http: Http){ }

  swits: Swit[] = [];

  baseUrl: string = 'http://localhost:1818/api';

  sendSwit(switText: string): Observable<any> {
    let options = this.putBasicHeaders();
    console.log('switText', switText);
    return this.http.post(this.baseUrl+'/swit', {swit: switText}, options).map(this.extractResponse);
  };

  getSwits(): Observable<any> {
    let options = this.putBasicHeaders();
    return this.http.get(this.baseUrl+'/swits', options).map(this.extractResponse);
  };

  likeSwit(switId, userId): Observable<any> {
    let options = this.putBasicHeaders();
    return this.http.post(this.baseUrl+'/like/', {switId: switId, userId: userId}, options).map(this.extractResponse);
  }

  private putBasicHeaders(){
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return new RequestOptions({
      headers: headers
    });
  };


  extractResponse(res: Response){
    let body = res.json();
    console.log('body', body);
    return body || {};
  };
}
