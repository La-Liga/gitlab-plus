import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficBarChartComponent } from './grafic-bar-chart.component';

describe('GraficoBarChartComponent', () => {
  let component: GraficBarChartComponent;
  let fixture: ComponentFixture<GraficBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
