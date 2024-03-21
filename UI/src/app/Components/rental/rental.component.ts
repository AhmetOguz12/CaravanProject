import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from 'src/app/Services/rental.service';
import { RentalDetailDto } from 'src/app/Module/rentalDetailDto';
import { CaravanService } from 'src/app/Services/caravan.service';
import { CaravanDetailDto } from 'src/app/Module/caravanDetailDto';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  constructor(
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute,
    private caravanService: CaravanService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = +params['id'];
      if (!isNaN(id)) {
        this.detailId = id;
      }
    });
    this.getall();
  }

  selectedCaravanId: number;
  selectedCaravanName: string;
  detailId: number;
  caravan: CaravanDetailDto[] = [];
  rentals: RentalDetailDto[] = [];
  message: string = '';

  getCaravanDetailDtoById(rentalId: number, index: number) {
    this.caravanService.getCaravanByDetailId(rentalId).subscribe((response) => {
      if (response.data.length > 0) {
        this.rentals[index].caravanName = response.data[0].name;
      }
    });
  }

  getall() {
    this.rentalService.getall().subscribe((response) => {
      this.rentals = response.data;
      for (let i = 0; i < this.rentals.length; i++) {
        console.log(this.rentals[i].caravanId);
        this.getCaravanDetailDtoById(this.rentals[i].caravanId, i);
      }
    });
  }
}
