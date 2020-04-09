import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantidade-telas-overview',
  templateUrl: './quantidade-telas-overview.component.html',
  styleUrls: ['./quantidade-telas-overview.component.css']
})
export class QuantidadeTelasOverviewComponent implements OnInit {

  styleGeral = 10 + '%';
  styleSprint = 50 + '%';

  constructor() { }

  ngOnInit(): void {
  }

}
