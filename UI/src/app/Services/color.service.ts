import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Module/listReponseModule';
import { Color } from '../Module/color';
import { ResponseModel } from '../Module/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:7199/api/';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + 'colors/getall';
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  getbyid(id: number): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + 'colors/getbyid?colorId=' + id;
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  delete(color: Color): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'colors/delete';
    return this.httpClient.post<ResponseModel>(newPath, color);
  }

  add(color: Color): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'colors/add';
    return this.httpClient.post<ResponseModel>(newPath, color);
  }
  update(color: Color): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'colors/update';
    return this.httpClient.put<ResponseModel>(newPath, color);
  }
}
