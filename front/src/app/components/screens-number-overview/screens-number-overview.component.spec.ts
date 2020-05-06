import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreensNumberOverviewComponent } from './screens-number-overview.component';

describe('ScreensNumberOverviewComponent', () => {
  let component: ScreensNumberOverviewComponent;
  let fixture: ComponentFixture<ScreensNumberOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreensNumberOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreensNumberOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
