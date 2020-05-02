import { Component, OnInit, Input } from '@angular/core';
import { Colors } from '../models/enuns/colors.enum';

@Component({
  selector: 'app-mensagem-error',
  templateUrl: './mensagem-error.component.html',
  styleUrls: ['./mensagem-error.component.css']
})
export class MensagemErrorComponent implements OnInit {

  @Input() mensagem: string;
  @Input() color: string;


  classColor = 'alert alert-';

  constructor() { }

  ngOnInit(): void {
    this.classColor += this.color;
  }

}
