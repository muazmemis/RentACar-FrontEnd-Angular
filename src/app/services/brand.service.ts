import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../modules/brandResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl: string = 'https://localhost:44335/api/brands/getAll';
  constructor(private httpclient: HttpClient) {}

  getBrands(): Observable<BrandResponseModel> {
    return this.httpclient.get<BrandResponseModel>(this.apiUrl);
  }
}
