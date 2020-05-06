import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficPieComponent } from './grafic-pie.component';

describe('GraficoPieComponent', () => {
  let component: GraficPieComponent;
  let fixture: ComponentFixture<GraficPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
