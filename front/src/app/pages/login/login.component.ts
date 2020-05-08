import { Colors } from './../../models/enuns/colors.enum';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from './user';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  mensagemerro: string;



  provider = new firebase.auth.GoogleAuthProvider();

  constructor(public authService: AuthService, public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
   }




  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password)
      .catch((erro) => {
        this.mensagemerro = erro.message;
      });
    this.email = this.password = '';
  }

  loginGoogle() {
  this.authService.logingoogle();
}

}
