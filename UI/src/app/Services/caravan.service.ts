import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Caravan } from '../Module/caravan';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Module/listReponseModule';
import { ResponseModel } from '../Module/responseModel';
import { CaravanDetailDto } from '../Module/caravanDetailDto';

@Injectable({
  providedIn: 'root',
})
export class CaravanService {
  apiUrl = 'https://localhost:7199/api/';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<CaravanDetailDto>> {
    let newPath = this.apiUrl + 'caravans/caravandetaildto';
    return this.httpClient.get<ListResponseModel<CaravanDetailDto>>(newPath);
  }
  getbyıd(id: number): Observable<ListResponseModel<CaravanDetailDto>> {
    let newPath = this.apiUrl + 'caravans/id?id=' + id;
    return this.httpClient.get<ListResponseModel<CaravanDetailDto>>(newPath);
  }

  caravanAdd(caravan: Caravan): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'caravans/add';
    return this.httpClient.post<ResponseModel>(newPath, caravan);
  }

  caravanDelete(caravan: Caravan): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'caravans/delete';
    return this.httpClient.post<ResponseModel>(newPath, caravan);
  }

  update(caravan: Caravan): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'caravans/update';
    return this.httpClient.put<ResponseModel>(newPath, caravan);
  }

  caravanUpdate(caravan: Caravan): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'caravans/update';
    return this.httpClient.put<ResponseModel>(newPath, caravan);
  }

  getCaravanByBrand(
    brandid: number
  ): Observable<ListResponseModel<CaravanDetailDto>> {
    let newPath = this.apiUrl + 'caravans/getbybrandid?brandId=' + brandid;
    return this.httpClient.get<ListResponseModel<CaravanDetailDto>>(newPath);
  }

  getCaravanByColor(
    id: number
  ): Observable<ListResponseModel<CaravanDetailDto>> {
    let newPath = this.apiUrl + 'caravans/getbycolorid?colorId=' + id;
    return this.httpClient.get<ListResponseModel<CaravanDetailDto>>(newPath);
  }

  getCaravanByDetailId(
    id: number
  ): Observable<ListResponseModel<CaravanDetailDto>> {
    let newPath = this.apiUrl + 'caravans/caravandetaildtobyid?id=' + id;
    return this.httpClient.get<ListResponseModel<CaravanDetailDto>>(newPath);
  }

  getCaravanByColorWithBrandId(
    colorid: number,
    brandid: number
  ): Observable<ListResponseModel<CaravanDetailDto>> {
    let newPath =
      this.apiUrl +
      'caravans/getbycolorıdwithbrandıd?colorId=' +
      colorid +
      '&brandId=' +
      brandid;
    return this.httpClient.get<ListResponseModel<CaravanDetailDto>>(newPath);
  }
}
