import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../modules/brand';
import { ListResponseModel } from '../modules/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl: string = 'https://localhost:44335/api/brands/getAll';
  constructor(private httpclient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpclient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}
