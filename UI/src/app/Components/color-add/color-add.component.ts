import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/Module/color';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css'],
})
export class ColorAddComponent implements OnInit {
  colorAddForm: FormGroup;
  color: Color[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createColorAddFrom();
  }

  createColorAddFrom() {
    this.colorAddForm = this.formBuilder.group({
      name: [''],
    });
  }

  add() {
    if (this.colorAddForm.valid) {
      let colorModel = Object.assign({}, this.colorAddForm.value);
      this.colorService
        .add(colorModel)
        .subscribe(() => this.toastrService.success('Renk Eklendi'));
    } else {
      this.toastrService.error('Formunuz Eksik');
    }
  }
}
