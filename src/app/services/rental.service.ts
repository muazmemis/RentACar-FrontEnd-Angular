import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modules/listResponseModel';
import { Rental } from '../modules/rental';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl: string = 'https://localhost:44335/api/rentals/getrentaldetails';
  constructor(private httpclient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpclient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}
