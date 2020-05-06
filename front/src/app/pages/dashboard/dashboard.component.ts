import { Component, OnInit, NgZone } from '@angular/core';
import { Colors } from '../../models/enuns/colors.enum';
import { Labels } from '../../models/enuns/labels.enum';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private ngZone: NgZone, private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }
  ngOnInit(): void {
    this.ngZone.run(() => {
      console.log('iniciando dashboard');
    });
  }

  get colors() {
    return Colors;
  }

  get labels() {
    return Labels;
  }

}
