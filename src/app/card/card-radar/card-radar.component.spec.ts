import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRadarComponent } from './card-radar.component';

describe('CardRadarComponent', () => {
  let component: CardRadarComponent;
  let fixture: ComponentFixture<CardRadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRadarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
