import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/Module/brand';
import { BrandService } from 'src/app/Services/brand.service';
import { FilrteService } from 'src/app/Services/filrte.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brand: Brand[] = [];
  currentBrand: Brand; //şuanki marka demek onu burda tutucaz bunuda html'De çekicez

  detectChange: boolean = false;
  constructor(
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private filterService: FilrteService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.brandService.getAll().subscribe((response) => {
      this.brand = response.data;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
    /* this.filterService.setBrandId(this.currentBrand.id);
    console.log('current brand' + this.currentBrand.id);*/
  }

  clearCurrenBrand() {
    this.currentBrand = { id: 0, name: '' };
    // this.filterService.setBrandId(this.currentBrand.id);
    // console.log('current brand' + this.currentBrand.id);
  }
  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllBrandClaa() {
    if (!this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
