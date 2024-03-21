import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/Module/color';

import { ColorService } from 'src/app/Services/color.service';
import { FilrteService } from 'src/app/Services/filrte.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color;
  constructor(
    private colorService: ColorService,
    private filterService: FilrteService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.getAll();
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
}
