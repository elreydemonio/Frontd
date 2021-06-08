import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosDisponiblesComponent } from './vehiculos-disponibles.component';

describe('VehiculosDisponiblesComponent', () => {
  let component: VehiculosDisponiblesComponent;
  let fixture: ComponentFixture<VehiculosDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculosDisponiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
