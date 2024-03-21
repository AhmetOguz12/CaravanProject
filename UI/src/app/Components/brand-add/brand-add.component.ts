import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/Module/brand';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
})
export class BrandAddComponent implements OnInit {
  brandAddForm: FormGroup;
  brand: Brand[] = [];

  constructor(
    private brandService: BrandService,
    private formbuilder: FormBuilder,
    private toastrService: ToastrService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm() {
    this.brandAddForm = this.formbuilder.group({
      name: [''],
    });
  }

  add() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService
        .add(brandModel)
        .subscribe(() => this.toastrService.success('Marka Eklendi'));
    } else {
      this.toastrService.error('Formunuz Eksik');
    }
  }
}
