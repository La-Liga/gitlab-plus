import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafic-bar-chart',
  templateUrl: './grafic-bar-chart.component.html',
  styleUrls: ['./grafic-bar-chart.component.css']
})
export class GraficBarChartComponent implements OnInit  {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['To do', 'Staging', 'RD'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [{data: [65, 59, 80], label: '' }];
  public barChartColors = [
    {backgroundColor: ['rgb(26, 89, 214 )', 'rgb(252, 191, 29)', 'rgb(56, 135, 52)']}
  ];

  constructor() { }

  ngOnInit() {
  }
}
