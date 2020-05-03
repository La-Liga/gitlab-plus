import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  userData: any;
  loggedIn = false;


  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }


  isAuthenticated() {
    this.user = this.firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.router.navigate(['/login']);
      })
      .catch(err => {
        this.teste();
        console.log('Something went wrong:', err.message);
      });
  }

  teste(){
    alert('teste');
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.loggedIn = true;
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        console.log("teste");
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  logingoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    this.googleAuth(provider);
  }

  googleAuth(provider) {
    firebase.auth().signInWithPopup(provider)
      .then((authData) => {
        this.loggedIn = true;
        this.router.navigate(['/dashboard']);
      }).catch( (error) => {
        console.log(error);
      });
  }
}
