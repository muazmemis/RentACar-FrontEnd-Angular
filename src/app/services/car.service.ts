import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl: string = environment.apiURL;
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let path = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

  getCarDetails(carId: number): Observable<ListResponseModel<CarDetail>> {
    let path = this.apiUrl + 'cars/getcardetailsbycarid?carid=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let path = this.apiUrl + 'cars/getcardetailsbybrandid?brandid=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let path = this.apiUrl + 'cars/getcardetailsbycolorid?colorid=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

  getCarListBrandIdColorId(
    brandId: number,
    colorId: number
  ): Observable<ListResponseModel<Car>> {
    let path =
      this.apiUrl +
      'cars/getcarlistbrandidcolorid?brandid=' +
      brandId +
      '&colorid=' +
      colorId;
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }
}
