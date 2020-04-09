import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterIssuesComponent } from './filter-issues.component';

describe('FilterIssuesComponent', () => {
  let component: FilterIssuesComponent;
  let fixture: ComponentFixture<FilterIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
