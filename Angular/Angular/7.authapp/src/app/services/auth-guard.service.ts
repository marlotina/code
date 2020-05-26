import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate  {

  constructor(private auth: AuthService) {

  }

  canActivate(next:ActivatedRouteSnapshot, status:RouterStateSnapshot){

    console.log(next);

    if(this.auth.isAuthenticated()){
      console.log("is logued");
      return true;  
    }

    console.log("is logout");
    return false;
    
  }
}
