
import { Component, OnInit } from '@angular/core';


declare var Chart: any;

@Component({
  selector: 'app-burndown',
  templateUrl: './burndown.component.html',
  styleUrls: ['./burndown.component.css']
})
export class BurndownComponent implements OnInit {
  sprints = ['Sprint 1', 'Sprint 2', 'Sprint 3'];



  constructor() { }


  sumArrayUpTo(arrData, index) {
    let total = 0;
    for (let i = 0; i <= index; i++) {
      if (arrData.length > i) {
        total += arrData[i];
      }
    }
    return total;
  }

  showBurnDown(elementId, burndownData, scopeChange = []) {

    const speedCanvas = document.getElementById(elementId);

    Chart.defaults.global.defaultFontFamily = 'Arial';
    Chart.defaults.global.defaultFontSize = 14;

    const totalHoursInSprint = burndownData[0];
    const idealHoursPerDay = totalHoursInSprint / 9;
    let i = 0;

    const speedData = {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'],
      datasets: [
        {
          label: 'Burndown',
          data: burndownData,
          fill: false,
          borderColor: '#EE6868',
          backgroundColor: '#EE6868',
          lineTension: 0,
        },
        {
          label: 'Ideal',
          borderColor: '#6C8893',
          backgroundColor: '#6C8893',
          lineTension: 0,
          borderDash: [5, 5],
          fill: false,
          data: [
            Math.round(totalHoursInSprint - (idealHoursPerDay * i++) + this.sumArrayUpTo(scopeChange, 0)), // 1
            Math.round(totalHoursInSprint - (idealHoursPerDay * i++) + this.sumArrayUpTo(scopeChange, 1)), // 2
            Math.round(totalHoursInSprint - (idealHoursPerDay * i++) + this.sumArrayUpTo(scopeChange, 2)), // 3
            Math.round(totalHoursInSprint - (idealHoursPerDay * i++) + this.sumArrayUpTo(scopeChange, 3)), // 4
            Math.round(totalHoursInSprint - (idealHoursPerDay * i++) + this.sumArrayUpTo(scopeChange, 4)), // 5
            Math.round(totalHoursInSprint - (idealHoursPerDay * i++) + this.sumArrayUpTo(scopeChange, 5)), // 6
            Math.round(totalHoursInSprint - (idealHoursPerDay * i++) + this.sumArrayUpTo(scopeChange, 6)), // 7
            Math.round(totalHoursInSprint - (idealHoursPerDay * i++) + this.sumArrayUpTo(scopeChange, 7)), // 8
            Math.round(totalHoursInSprint - (idealHoursPerDay * i++) + this.sumArrayUpTo(scopeChange, 8)), // 9
            Math.round(totalHoursInSprint - (idealHoursPerDay * i++) + this.sumArrayUpTo(scopeChange, 9))  // 10
          ]
        },
      ]
    };

    const chartOptions = {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 80,
          fontColor: 'black'
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: Math.round(burndownData[0] * 1.1)
          }
        }]
      }
    };

    const lineChart = new Chart(speedCanvas, {
      type: 'line',
      data: speedData,
      options: chartOptions
    });

  }

  ngOnInit(): void {

    this.showBurnDown('burndown43',
      [200, 160, 160, 140, 90, 90, 80],
      [0, 0, 0, 0, 0, 32, 0, 0, 0, 0]
    );

    // this.showBurnDown();
    console.log(Chart);
  }

}
