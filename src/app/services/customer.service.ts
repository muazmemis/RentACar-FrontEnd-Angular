import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../modules/customerResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl: string = 'https://localhost:44335/api/customers/getAll';
  constructor(private httpclient: HttpClient) {}

  getCustomers(): Observable<CustomerResponseModel> {
    return this.httpclient.get<CustomerResponseModel>(this.apiUrl);
  }
}
