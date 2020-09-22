import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDeEventoComponent } from './detalle-de-evento.component';

describe('DetalleDeEventoComponent', () => {
  let component: DetalleDeEventoComponent;
  let fixture: ComponentFixture<DetalleDeEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDeEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDeEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
