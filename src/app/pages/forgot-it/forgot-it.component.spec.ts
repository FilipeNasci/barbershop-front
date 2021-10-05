import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotItComponent } from './forgot-it.component';

describe('ForgotItComponent', () => {
  let component: ForgotItComponent;
  let fixture: ComponentFixture<ForgotItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
