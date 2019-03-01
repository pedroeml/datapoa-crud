import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhasLotacaoListComponent } from './linhas-lotacao-list.component';

describe('LinhasLotacaoListComponent', () => {
  let component: LinhasLotacaoListComponent;
  let fixture: ComponentFixture<LinhasLotacaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhasLotacaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhasLotacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
