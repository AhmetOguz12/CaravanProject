import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/Module/brand';
import { CaravanDetailDto } from 'src/app/Module/caravanDetailDto';
import { Color } from 'src/app/Module/color';
import { BrandService } from 'src/app/Services/brand.service';

import { CaravanService } from 'src/app/Services/caravan.service';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-caravan-update',
  templateUrl: './caravan-update.component.html',
  styleUrls: ['./caravan-update.component.css'],
})
export class CaravanUpdateComponent implements OnInit {
  caravandetaildto: CaravanDetailDto;
  caravanUpdateFrom: FormGroup;
  color: Color[] = [];
  brand: Brand[] = [];
  selectedBrandId: number;
  selectedColorId: number;
  brandNames: string[] = this.brand.map((brand) => brand.name);

  constructor(
    private caravanService: CaravanService,
    private formBuilder: FormBuilder,
    private activatedRouter: ActivatedRoute,
    private toastrService: ToastrService,
    private colorService: ColorService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.createCaravanUpdateForm();
    this.loadCaravan();
    this.getAllBrand();
    this.getAllColor();
  }

  createCaravanUpdateForm() {
    this.caravanUpdateFrom = this.formBuilder.group({
      id: [''],
      brandId: [''],
      colorId: [''],
      name: [''],
      modelYear: [''],
      dailyPrice: [''],
      description: [''],
      imagePath: [''],
    });
  }

  loadCaravan() {
    const caravanId = this.activatedRouter.snapshot.params['id'];
    this.caravanService.getbyıd(caravanId).subscribe((response) => {
      const caravan = response.data;
      this.caravanUpdateFrom.patchValue(caravan);
      console.log(caravan);
    });
  }

  update() {
    if (this.caravanUpdateFrom.valid) {
      const caravanModel = {
        ...this.caravanUpdateFrom.value,
        brandId: this.selectedBrandId,
        colorId: this.selectedColorId,
      };
      this.caravanService.update(caravanModel).subscribe(() => {
        this.toastrService.success('Caravan Güncellendi');
      });
    } else {
      this.toastrService.error('Fromunuz Hatalı');
    }
  }

  getAllColor() {
    this.colorService.getAll().subscribe((response) => {
      this.color = response.data.map((item) => ({
        ...item,
        colorId: item.id,
      }));
    });
  }

  getAllBrand() {
    this.brandService.getAll().subscribe((response) => {
      this.brand = response.data.map((item) => ({
        ...item,
        brandId: item.id,
      }));
    });
  }
}
