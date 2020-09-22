import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsdeusuarioComponent } from 'src/app/features/ticketsdeusuario/ticketsdeusuario.component';

describe('TicketsdeusuarioComponent', () => {
  let component: TicketsdeusuarioComponent;
  let fixture: ComponentFixture<TicketsdeusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsdeusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsdeusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
