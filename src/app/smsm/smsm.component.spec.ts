import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMSMComponent } from './smsm.component';

describe('SMSMComponent', () => {
  let component: SMSMComponent;
  let fixture: ComponentFixture<SMSMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMSMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SMSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
