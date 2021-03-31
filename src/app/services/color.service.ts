import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColorResponseModel } from '../modules/colorResponseMode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl: string = 'https://localhost:44335/api/colors/getAll';
  constructor(private httpclient: HttpClient) {}

  getColors(): Observable<ColorResponseModel> {
    return this.httpclient.get<ColorResponseModel>(this.apiUrl);
  }
}
