import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirServicioComponent } from './pedir-servicio.component';

describe('PedirServicioComponent', () => {
  let component: PedirServicioComponent;
  let fixture: ComponentFixture<PedirServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedirServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedirServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
