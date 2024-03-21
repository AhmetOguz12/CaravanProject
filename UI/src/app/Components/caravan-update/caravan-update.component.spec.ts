import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaravanUpdateComponent } from './caravan-update.component';

describe('CaravanUpdateComponent', () => {
  let component: CaravanUpdateComponent;
  let fixture: ComponentFixture<CaravanUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaravanUpdateComponent]
    });
    fixture = TestBed.createComponent(CaravanUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
