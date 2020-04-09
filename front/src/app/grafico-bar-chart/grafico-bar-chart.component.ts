import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-bar-chart',
  templateUrl: './grafico-bar-chart.component.html',
  styleUrls: ['./grafico-bar-chart.component.css']
})
export class GraficoBarChartComponent implements OnInit  {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['To do', 'Staging', 'RD'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData= [
    { data: [65, 59, 80], label: '' }
  ];
  public barChartColors =[
    {
      backgroundColor: ['rgb(26, 89, 214 )', 'rgb(252, 191, 29  )', 'rgb(56, 135, 52)']
    },
  ];

  // public barChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80], label: 'Series A' },
  //   { data: [28, 48, 40], label: 'Series B' }
  // ];

  constructor() { }

  ngOnInit() {
  }
}
