import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTenDayComponent } from './last-ten-day.component';

describe('LastTenDayComponent', () => {
  let component: LastTenDayComponent;
  let fixture: ComponentFixture<LastTenDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastTenDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTenDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
