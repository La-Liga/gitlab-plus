import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoBarChartComponent } from './grafico-bar-chart.component';

describe('GraficoBarChartComponent', () => {
  let component: GraficoBarChartComponent;
  let fixture: ComponentFixture<GraficoBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
