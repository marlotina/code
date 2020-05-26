import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

  isAuthenticated(){
    console.log("isAuthenticated method call");
    return true;    
  }

  showLogin(url){

  }

}
