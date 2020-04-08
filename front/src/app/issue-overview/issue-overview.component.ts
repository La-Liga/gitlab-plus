import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-overview',
  templateUrl: './issue-overview.component.html',
  styleUrls: ['./issue-overview.component.css']
})
export class IssueOverviewComponent implements OnInit {
  public barChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels = ['To Do', 'Staging', 'RP'];
  public barChartType= 'bar';
  public barChartLegend = true;
  public barChartData= [
    { data: [65, 59, 80, 81, 56, 55, 40], label: '' }
  ];
  public pieChartColors =[
    {
      backgroundColor: ['rgb(0,0,255)', 'rgb(255,165,0)', 'rgb(0,100,0)'],
    },
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
