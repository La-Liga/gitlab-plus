import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  email: string;
  password: string;
  mensagemerro: string;
  inputBoxError: string;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
    console.log('teste signup');
  }

  mensagemErroChange() {
    this.mensagemerro = '';
    this.inputBoxError = '#d1d3e2';
  }
}
