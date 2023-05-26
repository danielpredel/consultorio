import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABCUsuariosComponent } from './abcusuarios.component';

describe('ABCUsuariosComponent', () => {
  let component: ABCUsuariosComponent;
  let fixture: ComponentFixture<ABCUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABCUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABCUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
