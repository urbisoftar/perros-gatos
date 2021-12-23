import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroGatosComponent } from './registro-gatos.component';

describe('RegistroGatosComponent', () => {
  let component: RegistroGatosComponent;
  let fixture: ComponentFixture<RegistroGatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroGatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
