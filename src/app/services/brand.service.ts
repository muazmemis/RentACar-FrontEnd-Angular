import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl: string = environment.apiURL;
  constructor(private httpclient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    let path = this.apiUrl + 'brands/getAll';
    return this.httpclient.get<ListResponseModel<Brand>>(path);
  }
}
