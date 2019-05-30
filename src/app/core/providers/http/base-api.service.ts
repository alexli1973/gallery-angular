import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Image} from '../../models/image';
import {map} from 'rxjs/operators';
import {User} from '../../models/user';
import {Urls} from '../../models/urls';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  baseUrl = 'https://api.unsplash.com/photos/';
  accessKey = '232b180336ed15f727b1051be98f347b14b406133f75ee1d3457912077a54e22';
  page = 1;
  perPage = 3;
  reqUrl = `${this.baseUrl}?client_id=${this.accessKey}&page=${this.page}&per_page=${this.perPage}`;

  constructor(public http: HttpClient) { }

  getFullResponse():Observable<HttpResponse>

  getImages(): Observable<Image[]> {
    // return this.http.get<Image[]>(this.reqUrl);
    return this.http.get<Image[]>(this.reqUrl, {observe: 'events'})
      .pipe((map(data => {
      debugger;
      return data.map((image: any) => {
        const user: User =  image['user'];
        const urls: Urls =  image['urls'];
        return {
          id: image.id,
          createdAt: image.created_at,
          updatedAt: image.updated_at,
          width: image.width,
          height: image.height,
          likes: image.likes,
          user: {
            id: user.id,
            username: user.username
          },
          urls : {
            raw: urls.raw,
            full: urls.full,
            regular: urls.regular,
            small: urls.small,
            thumb: urls.thumb
          }
        };
      });
    })));
  }
}
