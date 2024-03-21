import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { Toast, ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/Module/brand';
import { Caravan } from 'src/app/Module/caravan';
import { CaravanDetailDto } from 'src/app/Module/caravanDetailDto';
import { Rental } from 'src/app/Module/rental';
import { RentalDetailDto } from 'src/app/Module/rentalDetailDto';

import { CaravanService } from 'src/app/Services/caravan.service';
import { RentalService } from 'src/app/Services/rental.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css'],
})
export class RentalDetailComponent implements OnInit {
  rentalAddFrom: FormGroup;
  userId: string = '';
  detailId: number;
  selectedCaravanId: number;
  selectedCaravanName: string;
  rentalModel: RentalDetailDto[];
  rental: Rental[] = [];
  caravan: CaravanDetailDto[] = [];
  date: Date | undefined;

  message: string = 'Araç Müsait ';
  Idfromroute?: number;
  constructor(
    private rentalService: RentalService,
    private caravanService: CaravanService,
    private activatedRoute: ActivatedRoute,
    private formbuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private cookieService: CookieService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          const idNumber = parseInt(id, 10);
          this.selectedCaravanId = idNumber;
          this.getCheckRental(idNumber);
        }
        this.createRentalAddForm();
        this.getCaravanDetailDtoById();
      },
    });

    this.tokenGetk();
  }

  tokenGetk() {
    const tokenGet = this.cookieService.get('Authorization');
    var token = tokenGet;
    if (tokenGet) {
      token = token.replace('Bearer', '');
      const decodedToken: any = jwtDecode(token);
      const nameId = decodedToken['nameid'];
      this.userId = nameId;
      console.log(nameId);
    }
  }

  createRentalAddForm() {
    this.rentalAddFrom = this.formbuilder.group({
      caravanId: [''],
      caravanName: [''],
      rentDate: [''],
      returnDate: [''],
      UserId: [''],
    });
  }
  add() {
    if (this.rentalAddFrom.valid) {
      const rentalModel = {
        ...this.rentalAddFrom.value,
        caravanId: this.selectedCaravanId,
        UserId: this.userId,
      };
      console.log(this.selectedCaravanId);

      console.log(rentalModel);
      this.rentalService.add(rentalModel).subscribe(
        (response) => {
          this.toastrService.success('Kiralama Başarılı');
          console.log(this.rental);
          console.log(response); // HTTP isteği başarılıysa API'den dönen cevabı kontrol etmek için
        },
        (error) => {
          this.toastrService.error('Kiralama Başarısız: ' + error.error);
          console.error(error); // Hata durumunda konsola yazdır
        }
      );
    } else {
      this.toastrService.error('Kiralama Başarısız: Form geçersiz');
    }
  }

  getCaravanDetailDtoById() {
    this.activatedRoute.params.subscribe((params) => {
      this.detailId = params['id'];
    });

    this.caravanService
      .getCaravanByDetailId(this.detailId)

      .subscribe((response) => {
        //this.rental = response.data;
        if (response.data.length > 0) {
          this.selectedCaravanId = response.data[0].id;
          this.selectedCaravanName = response.data[0].name;
        }
        this.caravan = response.data;
      });
  }

  getCheckRental(caravanId: number) {
    this.rentalService.getCheckRental(caravanId).subscribe(
      (response) => {
        this.toastrService.success(this.message);
      },
      (error) => {
        this.toastrService.error('Araç Kiralanamaz');

        this.router.navigate(['/caravans']); // Hata durumunda konsola yazdır
      }
    );
  }
}
