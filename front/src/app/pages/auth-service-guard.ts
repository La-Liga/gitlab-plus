
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()

export class AuthServiceGuards {
   loggedIn = false;

  constructor(private router: Router, public authService: AuthService) { }
  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        resolve(this.authService.loggedIn);
      }
    );
    return promise;
  }

  login() {
    this.router.navigate(['/dashboard']);
    // this.authService.loggedIn = true;
  }

  logout() {
    this.authService.loggedIn = false;
    this.router.navigate(['/login']);
  }
}
