import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = environment.apiURL;

  isCardExist(card: Card): Observable<ResponseModel> {
    let path = this.apiUrl + 'cards/iscardexist';
    console.log(card);
    return this.httpClient.post<ResponseModel>(path, card);
  }
  getCardByNumber(cardNumber: string): Observable<ListResponseModel<Card>> {
    let path = this.apiUrl + 'cards/getbycardnumber?cardnumber=' + cardNumber;
    return this.httpClient.get<ListResponseModel<Card>>(path);
  }
  updateCard(card: Card) {
    let path = this.apiUrl + 'cards/update';
    this.httpClient.put(path, card);
  }
}
