import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modules/listResponseModel';
import { Color } from '../modules/color';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl: string = 'https://localhost:44335/api/colors/getAll';
  constructor(private httpclient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    return this.httpclient.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
