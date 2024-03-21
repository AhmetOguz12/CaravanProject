import { ChangeDetectorRef, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { Color } from 'src/app/Module/color';
import { ColorService } from 'src/app/Services/color.service';
import { FilrteService } from 'src/app/Services/filrte.service';
import { Brand } from 'src/app/Module/brand';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];
  colors: Color[] = [];
  currentColor: Color;
  brand: Brand[] = [];
  currentBrand: Brand; //şuanki marka demek onu burda tutucaz bunuda html'De çekicez

  constructor(
    public layoutService: LayoutService,
    private colorService: ColorService,
    private filterService: FilrteService,
    private cdr: ChangeDetectorRef,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.cdr.detectChanges();
    this.getAll();
    this.getAlll();
  }
  getAll() {
    this.colorService
      .getAll()
      .subscribe((response) => (this.colors = response.data));
    this.cdr.detectChanges();
  }
  setCurrentColor(color: Color) {
    this.currentColor = color;
    /* this.filterService.setColorId(this.currentColor.id);
    console.log('current color' + this.currentColor.id);*/
  }
  getCurrentColorClass(color: Color) {
    if (color == this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  getAllColorClass() {
    if (!this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  clearCurrentColor() {
    this.currentColor = { id: 0, name: '' };
    /*  this.filterService.setColorId(this.currentColor.id);
    console.log('current color' + this.currentColor.id);*/
  }
  getAlll() {
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
