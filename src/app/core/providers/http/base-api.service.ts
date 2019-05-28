import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  baseUrl = 'https://api.unsplash.com/photos/';
  static _accessKey = '232b180336ed15f727b1051be98f347b14b406133f75ee1d3457912077a54e22';
  page = 1;
  perPage = 3;
  reqUrl = `${this.baseUrl}?client_id=${ApiService._accessKey}&page=${this.page}&per_page=${this.perPage}`;

  constructor() { }

 // getUrl(url:)
}
