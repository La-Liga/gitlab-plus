import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurndownComponent } from './burndown.component';

describe('BurndownComponent', () => {
  let component: BurndownComponent;
  let fixture: ComponentFixture<BurndownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurndownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurndownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
