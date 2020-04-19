import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagemerro: string;

  user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}
  // signIn(userTyped: User){
  signIn() {

    if (this.user.name === 'admin'
      && this.user.password === 'admin') {
      this.authService.login();
    } else {
      this.mensagemerro = 'Usuário ou senha inválido';
      this.authService.logout();
    }
  }
}
