import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-quantitativo-secundario',
  templateUrl: './card-quantitativo-secundario.component.html',
  styleUrls: ['./card-quantitativo-secundario.component.css']
})
export class CardQuantitativoSecundarioComponent implements OnInit {

  informacaoapi: Array<number> = [26, 48, 26];

  public pieChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom'
    }
  };
  public pieChartData = this.informacaoapi;
  public pieCharType = 'pie';
  public pieChartlabels = ['Task', 'Bug', 'Document'];
  public pieChartColors = [{
      backgroundColor: ['	rgb(0, 128, 43)', 'rgb(255, 51, 51)', 'rgba(51,153,255)'],
    },
  ];

  public barChartOptions = {
    legend: {
      position: 'bottom'
    },
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartlabels = ['To do', 'Staging', 'RP'];
  public barCharType = 'bar';
  public pieChartColors1 = [
    {
      backgroundColor: ['rgb(51, 204, 255)', 'rgb(255, 153, 51)', 'rgb(0, 128, 43)'],
    },
  ];

  public barChartData = [{
    data: this.informacaoapi, label: ''
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
