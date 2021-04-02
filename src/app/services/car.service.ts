import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../modules/car';
import { CarDetail } from '../modules/cardetail';
import { ListResponseModel } from '../modules/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl: string = 'https://localhost:44335/api/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+'cars/getcardetails'
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
  getCarDetails(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycarid?carid=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrand(brandId:number): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+'cars/getcardetailsbybrandid?brandid='+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number): Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+'cars/getcardetailsbycolorid?colorid='+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}