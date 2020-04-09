import { Component, OnInit } from '@angular/core';
// import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-pie',
  templateUrl: './grafico-pie.component.html',
  styleUrls: ['./grafico-pie.component.css']
})
export class GraficoPieComponent implements OnInit {

  informacaoapi: Array<number> = [26, 48, 26];

  public pieChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    }
  };
  public pieChartData = this.informacaoapi;
  public pieChartType = 'pie';
  public pieChartLabels = ['Task', 'Bug', 'Document'];
  public pieChartColors = [{
      backgroundColor: ['rgb(92, 184, 92)', 'rgb(217, 83, 79)', 'rgb(91, 192, 222)']
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
