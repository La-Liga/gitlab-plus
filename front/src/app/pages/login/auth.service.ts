import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
  loggedIn = false;

  constructor(private router: Router) { }
  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        resolve(this.loggedIn);
      }
    );
    return promise;
  }

  login() {
    this.router.navigate(['/dashboard']);
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/login']);
    
  }
}
