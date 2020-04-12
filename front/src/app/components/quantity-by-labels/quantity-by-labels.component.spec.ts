import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityByLabelsComponent } from './quantity-by-labels.component';

describe('QuantityByLabelsComponent', () => {
  let component: QuantityByLabelsComponent;
  let fixture: ComponentFixture<QuantityByLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityByLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityByLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
