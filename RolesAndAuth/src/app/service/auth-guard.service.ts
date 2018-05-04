import { Injectable }    from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';
import { AuthenticationService }    from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log("canActivate");
      console.log(state);
      if (!this.authService.isAuthenticated){
        this.authService.showLogin(state.url);
        return false;
      }
      
      if(this.isValidRole(route)){
      }
      
      return true;
  }

  isValidRole(route){
    let roles = route.data["roles"] as Array<string>;
    console.log("isValidRole");
    console.log(route);

    return (roles == null || roles.indexOf("the-logged-user-role") != -1);
  }
}