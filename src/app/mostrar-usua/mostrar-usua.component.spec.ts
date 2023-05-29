import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarUsuaComponent } from './mostrar-usua.component';

describe('MostrarUsuaComponent', () => {
  let component: MostrarUsuaComponent;
  let fixture: ComponentFixture<MostrarUsuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarUsuaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarUsuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
