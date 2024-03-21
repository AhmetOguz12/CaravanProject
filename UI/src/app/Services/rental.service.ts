import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../Module/listReponseModule';
import { Observable } from 'rxjs';
import { Rental } from '../Module/rental';
import { ResponseModel } from '../Module/responseModel';
import { RentalDetailComponent } from '../Components/rental-detail/rental-detail.component';
import { RentalDetailDto } from '../Module/rentalDetailDto';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'https://localhost:7199/api/';

  add(rental: Rental): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'rentals/add';
    return this.httpClient.post<ResponseModel>(newPath, rental);
  }

  getall(): Observable<ListResponseModel<RentalDetailDto>> {
    let newPath = this.apiUrl + 'rentals/getrentaldetaildto';
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath);
  }

  getByCaravanId(caravanId: number): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'rentals/getbycaravanid?caravanId=' + caravanId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalDetailDto(): Observable<ListResponseModel<RentalDetailDto>> {
    let newPath = this.apiUrl + 'rentals/getrentaldetaildto';
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath);
  }

  getCheckRental(caravanId: number): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'rentals/checkrental?caravanid=' + caravanId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
}
