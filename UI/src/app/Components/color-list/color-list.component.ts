import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/Module/color';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css'],
})
export class ColorListComponent implements OnInit {
  color: Color[] = [];

  constructor(private colorService: ColorService) {}
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.colorService.getAll().subscribe((response) => {
      this.color = response.data;
    });
  }

  delete(color: Color) {
    this.color = this.color.filter((response) => response !== color);
    this.colorService.delete(color).subscribe();
  }
}
