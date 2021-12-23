import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatosListadoComponent } from './gatos-listado.component';

describe('GatosListadoComponent', () => {
  let component: GatosListadoComponent;
  let fixture: ComponentFixture<GatosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatosListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
