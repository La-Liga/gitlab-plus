import { Component, OnInit } from '@angular/core';
import { Colors } from '../../models/enuns/colors.enum';
import { Labels } from '../../models/enuns/labels.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('iniciando dashboard');
  }

  get colors() {
    return Colors;
  }

  get labels() {
    return Labels;
  }

}
