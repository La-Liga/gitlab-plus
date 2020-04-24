import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-filter-issues-burndown',
  templateUrl: './app-filter-issues-burndown.component.html',
  styleUrls: ['./app-filter-issues-burndown.component.css']
})
export class AppFilterIssuesBurndownComponent implements OnInit {

  sprints = ['Sprint 1', 'Sprint 2', 'Sprint 3'];



  constructor() { }

  ngOnInit(): void {
  }

}
