import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDeEventosComponent } from './tabla-de-eventos.component';

describe('TablaDeEventosComponent', () => {
  let component: TablaDeEventosComponent;
  let fixture: ComponentFixture<TablaDeEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDeEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDeEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
