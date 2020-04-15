import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    document.querySelector('body').classList.add('bg-gradient-primary');
  }
  // signIn(userTyped: User){
  signIn(){
    if(this.user.name==="Rodrigo"
    && this.user.password === "123456"){
      this.authService.login();
    }
    else{
      this.authService.logout();
    }
  }

}
