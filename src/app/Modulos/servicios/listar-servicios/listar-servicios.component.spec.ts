import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarServiciosComponent } from './listar-servicios.component';

describe('ListarServiciosComponent', () => {
  let component: ListarServiciosComponent;
  let fixture: ComponentFixture<ListarServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
