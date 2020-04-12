import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  // labels = [
  //   {
  //     name: 'Sprint',
  //     id:1
  //   },
  //   {
  //     name: 'Label',
  //     id:2
  //   },
  //   {
  //     name: 'Usuários',
  //     id:3
  //   }
  // ];

  // sprints: ['Sprint 1', 'Sprint 2', 'Sprint 3'];
  // labels: ['Backlog do Produto','To-Do','Doing', 'Staging', 'Review', 'Ready to Production'];
  // users: ['Rodrigo Gonçalves', 'Paulo', 'Emmiliano', "Wescley", "Wanderson","Cobol"];

  teste = 'sprint';
  constructor() { }

  ngOnInit(): void {
  }

}
