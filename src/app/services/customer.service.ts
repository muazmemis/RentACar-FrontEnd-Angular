import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../modules/customer';
import { ListResponseModel } from '../modules/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl: string = 'https://localhost:44335/api/customers/getAll';
  constructor(private httpclient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    return this.httpclient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
