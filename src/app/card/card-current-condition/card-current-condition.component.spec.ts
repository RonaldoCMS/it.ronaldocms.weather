import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCurrentConditionComponent } from './card-current-condition.component';

describe('CardCurrentConditionComponent', () => {
  let component: CardCurrentConditionComponent;
  let fixture: ComponentFixture<CardCurrentConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCurrentConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCurrentConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
