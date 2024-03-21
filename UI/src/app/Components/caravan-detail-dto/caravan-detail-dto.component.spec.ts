import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaravanDetailDtoComponent } from './caravan-detail-dto.component';

describe('CaravanDetailDtoComponent', () => {
  let component: CaravanDetailDtoComponent;
  let fixture: ComponentFixture<CaravanDetailDtoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaravanDetailDtoComponent]
    });
    fixture = TestBed.createComponent(CaravanDetailDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
