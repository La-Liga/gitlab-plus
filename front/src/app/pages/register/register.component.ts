import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  messageError: string;
  inputBoxError: string;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
    console.log('teste signup');
  }

  messageErrorChange() {
    this.messageError = '';
    this.inputBoxError = '#d1d3e2';
  }
}
