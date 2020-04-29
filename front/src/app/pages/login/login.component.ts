import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  mensagemerro: string;
  inputBoxError: string;

  constructor(public authService: AuthService) { }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
    console.log("teste signup");
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = ''; 
    console.log("teste login");
  }

  logout() {
    this.authService.logout();
    console.log("teste logout");
  }

  ngOnInit(): void {}
  

  mensagemErroChange() {
    this.mensagemerro = '';
    this.inputBoxError = '#d1d3e2';
  }
}
