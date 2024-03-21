import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../Module/brand';
import { ListResponseModel } from '../Module/listReponseModule';
import { ResponseModel } from '../Module/responseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:7199/api/';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + 'brands/getall';
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  getById(id: number): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + 'brands/getbyid?brandId=' + id;
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  add(brand: Brand): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'brands/add';
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }

  delete(brand: Brand): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'brands/delete';
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }

  update(brand: Brand): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'brands/update';
    return this.httpClient.put<ResponseModel>(newPath, brand);
  }
}
