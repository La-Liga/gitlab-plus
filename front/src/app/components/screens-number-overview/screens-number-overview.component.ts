import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screens-number-overview',
  templateUrl: './screens-number-overview.component.html',
  styleUrls: ['./screens-number-overview.component.css']
})
export class ScreensNumberOverviewComponent implements OnInit {

  styleGeral = 10 + '%';
  styleSprint = 50 + '%';

  constructor() { }

  ngOnInit(): void {
  }

}
