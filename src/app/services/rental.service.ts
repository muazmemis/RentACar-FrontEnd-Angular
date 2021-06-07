import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl: string = environment.apiURL;
  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    let path = this.apiUrl + 'rentals/getall';
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }

  getRentalByCarId(carId: number): Observable<ListResponseModel<Rental>> {
    let path = this.apiUrl + 'rentals/getrentaldetailsbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Rental>>(path);
  }
  payRental(rental: Rental, amount: number) {
    let path = this.apiUrl + 'rentals/add';
    return this.httpClient.post<ResponseModel>(path, {
      payment: { amount: amount },
      rental: { rental },
    });
  }
  addRental(rental: Rental) {
    let path = this.apiUrl + 'rentals/add';
    this.httpClient.post(path, rental).subscribe();
  }
}
