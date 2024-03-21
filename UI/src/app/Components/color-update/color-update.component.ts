import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/Module/color';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css'],
})
export class ColorUpdateComponent implements OnInit {
  color: Color;
  colorUpdateForm: FormGroup;

  constructor(
    private colorService: ColorService,
    private formBuilder: FormBuilder,
    private activatedRouter: ActivatedRoute,
    private toastrSerice: ToastrService
  ) {}
  ngOnInit(): void {
    this.createColorUpdateForm();
    this.loadColor();
  }

  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      id: [''],
      name: [''],
    });
  }

  loadColor() {
    const colorId = this.activatedRouter.snapshot.params['id'];
    this.colorService.getbyid(colorId).subscribe((response) => {
      const color = response.data;
      this.colorUpdateForm.patchValue(color);
    });
  }

  update() {
    if (this.colorUpdateForm.valid) {
      const colorModel = this.colorUpdateForm.value;
      this.colorService.update(colorModel).subscribe(() => {
        this.toastrSerice.success('Renk Güncellendi');
      });
    } else {
      this.toastrSerice.error('Formunuz Eksik');
    }
  }
}
