import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaravanComponent } from './caravan.component';

describe('CaravanComponent', () => {
  let component: CaravanComponent;
  let fixture: ComponentFixture<CaravanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaravanComponent]
    });
    fixture = TestBed.createComponent(CaravanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
