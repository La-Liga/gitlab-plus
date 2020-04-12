import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuantitativoPrincipalComponent } from './card-quantitativo-principal.component';

describe('CardQuantitativoPrincipalComponent', () => {
  let component: CardQuantitativoPrincipalComponent;
  let fixture: ComponentFixture<CardQuantitativoPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardQuantitativoPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardQuantitativoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
