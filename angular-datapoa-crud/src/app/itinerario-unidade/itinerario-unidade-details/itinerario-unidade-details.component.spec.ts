import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerarioUnidadeDetailsComponent } from './itinerario-unidade-details.component';

describe('ItinerarioUnidadeDetailsComponent', () => {
  let component: ItinerarioUnidadeDetailsComponent;
  let fixture: ComponentFixture<ItinerarioUnidadeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItinerarioUnidadeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItinerarioUnidadeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
