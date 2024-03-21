import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilrteService {
  private brandIdSource = new BehaviorSubject<number | null>(null);
  private colorIdSource = new BehaviorSubject<number | null>(null);

  currentBrandId = this.brandIdSource.asObservable();
  currentColorId = this.colorIdSource.asObservable();

  constructor() {}

  setBrandId(brandId: number | null) {
    this.brandIdSource.next(brandId);
  }

  setColorId(colorId: number | null) {
    this.colorIdSource.next(colorId);
  }

  getSelectedIds() {
    return {
      brandId: this.brandIdSource.value,
      colorId: this.colorIdSource.value,
    };
  }

  // Combining brandId and colorId to observe changes in both
  getCombinedIds() {
    return combineLatest([this.currentBrandId, this.currentColorId]);
  }
}
