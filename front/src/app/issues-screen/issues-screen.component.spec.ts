import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesScreenComponent } from './issues-screen.component';

describe('IssuesScreenComponent', () => {
  let component: IssuesScreenComponent;
  let fixture: ComponentFixture<IssuesScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
