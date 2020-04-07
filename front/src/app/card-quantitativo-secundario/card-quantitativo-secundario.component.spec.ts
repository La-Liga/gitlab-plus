import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuantitativoSecundarioComponent } from './card-quantitativo-secundario.component';

describe('CardQuantitativoSecundarioComponent', () => {
  let component: CardQuantitativoSecundarioComponent;
  let fixture: ComponentFixture<CardQuantitativoSecundarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardQuantitativoSecundarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardQuantitativoSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
