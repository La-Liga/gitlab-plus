import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'quantity-by-labels',
  templateUrl: './quantity-by-labels.component.html',
  styleUrls: ['./quantity-by-labels.component.css']
})
export class QuantityByLabelsComponent implements OnInit {

  @Input() title: string = 'card';
  @Input() color: string = '';
  classColorBorder: string = 'border-left-';
  classColorText: string = 'text-';

  constructor() {}

  ngOnInit(): void {
    this.classColorBorder += this.color;
    this.classColorText += this.color;
  }

}
