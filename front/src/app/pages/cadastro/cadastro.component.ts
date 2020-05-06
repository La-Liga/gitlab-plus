import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  nome: string;
  email: string;
  confEmail: string;
  password: string;

  formularioDeUsuario: FormGroup;

  constructor(public authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formularioDeUsuario = this.fb.group( {
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      confEmail: [null, [FormValidations.equalsTo('email')]],
      password: [null, Validators.required],
    });
  }
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }
}
