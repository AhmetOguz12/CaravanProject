import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/Module/brand';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css'],
})
export class BrandUpdateComponent implements OnInit {
  brand: Brand;
  brandUpdateForm: FormGroup;
  constructor(
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createBrandUpdateForm();
    this.loadBrand();
  }

  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      id: [''],
      name: [''],
    });
  }

  loadBrand() {
    const brandId = this.activatedRoute.snapshot.params['id'];
    this.brandService.getById(brandId).subscribe((response) => {
      const brand = response.data;

      //gelen değerleri forma aktararak inputun dolu gelmesini sağlar
      this.brandUpdateForm.patchValue(brand);
    });
  }

  update() {
    if (this.brandUpdateForm.valid) {
      const brandModel = this.brandUpdateForm.value;
      this.brandService.update(brandModel).subscribe(() => {
        this.toastrService.success('Marka Güncellendi');
      });
    } else {
      this.toastrService.error('Formunuz Eksik');
    }
  }
}
