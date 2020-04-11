import { Component, OnInit, Input } from '@angular/core';
import { Colors } from '../../models/enuns/colors.enum';
import { Labels } from '../../models/enuns/labels.enum';

@Component({
  selector: 'app-quantity-by-labels',
  templateUrl: './quantity-by-labels.component.html',
  styleUrls: ['./quantity-by-labels.component.css']
})
export class QuantityByLabelsComponent implements OnInit {

  @Input() title: string;
  @Input() color: string = Colors.Primary;
  @Input() label: string = Labels.Todo;

  quantity = 0;
  classColorBorder = 'border-left-';
  classColorText = 'text-';

  constructor() {}

  ngOnInit(): void {
    this.classColorBorder += this.color;
    this.classColorText += this.color;
  }

}
