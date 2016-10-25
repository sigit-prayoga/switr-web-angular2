import { Injectable } from '@angular/core';
import { User } from './user'

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment'

@Injectable()
export class UserService {

  baseUrl: string = environment.baseUrl+':'+environment.port.go;

  constructor (private http: Http){ }

  addUser(user: User): Observable<any> {
    let options = this.putBasicHeaders();
    console.log('adding new user')
    return this.http.post(this.baseUrl+'/users', user, options).map(this.extractResponse);
  }

  getUser(uid: string): Observable<any> {
    let options = this.putBasicHeaders();
    return this.http.get(this.baseUrl+'/users/'+uid, options).map(this.extractResponse);
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
