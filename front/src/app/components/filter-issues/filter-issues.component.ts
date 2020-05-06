import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-issues',
  templateUrl: './filter-issues.component.html',
  styleUrls: ['./filter-issues.component.css']
})
export class FilterIssuesComponent implements OnInit {


  sprints = ['Sprint 1', 'Sprint 2', 'Sprint 3'];
  labels = ['Product Backlog', 'To-Do', 'Doing', 'Staging', 'Review', 'Ready to Production'];
  users = ['Rodrigo Gonçalves', 'Paulo', 'Emiliano', 'Wescley', 'Wanderson', 'Cobol'];


  constructor() { }

  ngOnInit(): void {
  }

}
