import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaravanAddComponent } from './caravan-add.component';

describe('CaravanAddComponent', () => {
  let component: CaravanAddComponent;
  let fixture: ComponentFixture<CaravanAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaravanAddComponent]
    });
    fixture = TestBed.createComponent(CaravanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
