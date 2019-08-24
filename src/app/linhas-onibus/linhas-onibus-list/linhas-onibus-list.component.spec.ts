import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhasOnibusListComponent } from './linhas-onibus-list.component';

describe('LinhasOnibusListComponent', () => {
  let component: LinhasOnibusListComponent;
  let fixture: ComponentFixture<LinhasOnibusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhasOnibusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhasOnibusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
