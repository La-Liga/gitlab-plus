import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantidadeTelasOverviewComponent } from './quantidade-telas-overview.component';

describe('QuantidadeTelasOverviewComponent', () => {
  let component: QuantidadeTelasOverviewComponent;
  let fixture: ComponentFixture<QuantidadeTelasOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantidadeTelasOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantidadeTelasOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
