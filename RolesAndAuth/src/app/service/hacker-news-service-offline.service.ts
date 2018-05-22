import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HackerNewsServiceOfflineService {

  private usersApiDataOffline: any;

  constructor(private http: Http) {
    this.usersApiDataOffline = JSON.parse(`{
              "100": {
                "DataValue": "First Value",
                "Id": "100"
              },
              "200": {
                "DataValue": "Second Value",
                "Id": "200"
              },
              "300": {
                "DataValue": "Thrid Value",
                "Id": "300"
              }
            }`);
  }

  getAllUser(){
    return Observable.of(this.usersApiDataOffline).delay(100);
  }

  getUser(id: string) {
    let user = this.usersApiDataOffline[id];
    return Observable.of(user).delay(100);
  }

  

  getUsers(ids: string[]): Observable<number[]> {

    let filteredUsers: any[] = [];

    ids.forEach(id => {
      let user = this.usersApiDataOffline[id];
      filteredUsers.push(user);
    })

 
    let ret = Observable.of(filteredUsers).delay(100);
    return ret;
  }

}
