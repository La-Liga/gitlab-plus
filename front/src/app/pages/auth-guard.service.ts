import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';

import { AuthServiceGuards } from './auth-service-guard';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  // private authServiceGuards: AuthServiceGuards;

  // ngOnit(){
  //   this.authServiceGuards = new AuthServiceGuards();
  // }

  constructor(private authServiceGuards: AuthServiceGuards, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authServiceGuards.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
