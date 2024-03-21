import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/Module/brand';
import { Color } from 'src/app/Module/color';
import { BrandService } from 'src/app/Services/brand.service';
import { CaravanService } from 'src/app/Services/caravan.service';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-caravan-add',
  templateUrl: './caravan-add.component.html',
  styleUrls: ['./caravan-add.component.css'],
})
export class CaravanAddComponent implements OnInit {
  caravanAddForm: FormGroup;
  brand: Brand[] = [];
  color: Color[];
  selectedBrandId: number;
  selectedColorId: number;

  constructor(
    private caravanService: CaravanService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.createCaravanAddForm();
    this.getAllBrand();
    this.getAllColor();
  }

  getAllBrand() {
    this.brandService.getAll().subscribe((response) => {
      this.brand = response.data.map((item) => ({
        ...item,
        brandId: item.id,
      }));
    });
  }

  getAllColor() {
    this.colorService.getAll().subscribe((response) => {
      this.color = response.data.map((item) => ({
        ...item,
        colorId: item.id,
      }));
    });
  }

  createCaravanAddForm() {
    this.caravanAddForm = this.formBuilder.group({
      brandId: [''],
      colorId: [''],
      name: [''],
      modelYear: [''],
      dailyPrice: [''],
      description: [''],
      imagePath: [''],
    });
  }
  /*add() {
    console.log(this.selectedBrandId + ' ' + this.selectedColorId);
    if (this.caravanAddForm.valid) {
      this.caravanAddForm.patchValue({
        brandId: this.selectedBrandId,
        colorId: this.selectedColorId,
      });
      let caravanModel = Object.assign({}, this.caravanAddForm.value);
      this.caravanService.caravanAdd(caravanModel).subscribe(() => {
        this.toastrService.success('Başarılı', 'Caravan Eklendi');
      });
    } else {
      this.toastrService.error('Formunuz Eksik, Dikkat Edin');
    }
  }*/
  add() {
    if (this.caravanAddForm.valid) {
      let caravanModel = {
        ...this.caravanAddForm.value,
        brandId: this.selectedBrandId,
        colorId: this.selectedColorId,
        // brandId: this.caravanAddForm.value.brandName,
        // colorId: this.caravanAddForm.value.colorName,
      };
      this.caravanService.caravanAdd(caravanModel).subscribe(() => {
        this.toastrService.success('Başarılı', 'Caravan Eklendi');
      });
    } else {
      this.toastrService.error('Formunuz Eksik, Dikkat Edin');
    }
  }
}
