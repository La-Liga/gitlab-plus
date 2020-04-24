import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFilterIssuesBurndownComponent } from './app-filter-issues-burndown.component';

describe('AppFilterIssuesBurndownComponent', () => {
  let component: AppFilterIssuesBurndownComponent;
  let fixture: ComponentFixture<AppFilterIssuesBurndownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFilterIssuesBurndownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFilterIssuesBurndownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
