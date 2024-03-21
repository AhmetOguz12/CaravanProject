import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Caravan } from 'src/app/Module/caravan';
import { CaravanService } from 'src/app/Services/caravan.service';
import { FilrteService } from 'src/app/Services/filrte.service';
import { CaravanDetailDtoComponent } from '../caravan-detail-dto/caravan-detail-dto.component';
import { CaravanDetailDto } from 'src/app/Module/caravanDetailDto';

@Component({
  selector: 'app-caravan',
  templateUrl: './caravan.component.html',
  styleUrls: ['./caravan.component.css'],
})
export class CaravanComponent implements OnInit {
  caravans: Caravan[] = [];
  caravandetail: CaravanDetailDto[] = [];
  selectedBrandId: number | null;
  selectedColorId: number | null;

  constructor(
    private caravanService: CaravanService,
    private activatedRoute: ActivatedRoute,
    private filterService: FilrteService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCaravansByBrand(params['id']);
      }
      if (params['id']) {
        this.getCaravanByColor(params['id']);
      } else {
        if (params['colorid'] && params['brandid']) {
          this.getCaravanByColorWithBrandId(
            params['colorid'],
            params['brandid']
          );
        }
        this.getAll();
      }
    });
  }

  getAll() {
    this.caravanService.getAll().subscribe((response) => {
      this.caravans = response.data;
    });
  }

  getCaravansByBrand(id: number) {
    this.caravanService.getCaravanByBrand(id).subscribe((response) => {
      this.caravans = response.data;
    });
  }

  getCaravanByColor(id: number) {
    this.caravanService.getCaravanByColor(id).subscribe((response) => {
      this.caravans = response.data;
    });
  }

  getCaravanByColorWithBrandId(colorid: number, brandid: number) {
    this.caravanService
      .getCaravanByColorWithBrandId(colorid, brandid)
      .subscribe((response) => (this.caravans = response.data));
  }
}
