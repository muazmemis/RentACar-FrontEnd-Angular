import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl: string = environment.apiURL;
  constructor(private httpclient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let path = this.apiUrl + 'customers/getcustomerdetails';
    return this.httpclient.get<ListResponseModel<Customer>>(path);
  }

  getCustomerById(customerId: number): Observable<ListResponseModel<Customer>> {
    let path = this.apiUrl + 'customers/getcostumerbyid?id=' + customerId;
    return this.httpclient.get<ListResponseModel<Customer>>(path);
  }
}
