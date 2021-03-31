import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../modules/rentalResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl: string = 'https://localhost:44335/api/rentals/getrentaldetails';
  constructor(private httpclient: HttpClient) {}

  getRentals(): Observable<RentalResponseModel> {
    return this.httpclient.get<RentalResponseModel>(this.apiUrl);
  }
}
