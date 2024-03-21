import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Module/brand';
import { BrandService } from 'src/app/Services/brand.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
})
export class BrandListComponent implements OnInit {
  brand: Brand[] = [];

  constructor(
    private brandService: BrandService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.brandService.getAll().subscribe((response) => {
      this.brand = response.data;
      console.log(this.brand);
    });
  }
  delete(brand: Brand) {
    this.brand = this.brand.filter((response) => response !== brand);
    this.brandService.delete(brand).subscribe();
  }
}
