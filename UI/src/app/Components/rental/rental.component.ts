import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from 'src/app/Services/rental.service';
import { RentalDetailDto } from 'src/app/Module/rentalDetailDto';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: RentalDetailDto[] = [];
  message: string = '';
  constructor(
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getall();
  }

  getRentalByCaravanId(caravanId: number) {
    this.rentalService.getByCaravanId(caravanId).subscribe((response) => {
      this.rentals = response.data;
    });
  }
  getall() {
    this.rentalService.getall().subscribe((response) => {
      this.rentals = response.data;
    });
  }
}
