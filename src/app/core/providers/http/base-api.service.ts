import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import {Image} from '../../models/image';
import {catchError, map} from 'rxjs/operators';
import {User} from '../../models/user';
import {Urls} from '../../models/urls';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  baseUrl = 'https://api.unsplash.com/photos';
  accessKey = '232b180336ed15f727b1051be98f347b14b406133f75ee1d3457912077a54e22';
  page = 1;
  perPage = 3;
  reqUrl = `${this.baseUrl}?client_id=${this.accessKey}&page=${this.page}&per_page=${this.perPage}`;

  constructor(public http: HttpClient) { }

  // responseData(): Observable<HttpResponse> {
  //    return this.http.get<HttpResponse>(this.reqUrl, {observe: 'response'})
  //      .pipe(
  //        catchError(this.handleError)
  //      );
  // }

  responseData(pageNumber: string, perPage: string ): Observable<any> {
    const httpParams = new HttpParams()
      .set('client_id', this.accessKey)
      .set('page', pageNumber)
      .set('per_page', perPage);
    return this.http.get<any>(this.baseUrl, {params: httpParams, observe: 'response'})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client side error
      console.error('An error occured:', error.error.message);
    } else {
      // backend error
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      {
        errorMessage: error.error.errors,
        errorCode: error.status
      });
     // 'Something bad happened; please try again later.');
  }
}
