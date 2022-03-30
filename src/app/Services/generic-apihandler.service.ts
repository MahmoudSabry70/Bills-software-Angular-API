import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiModel } from '../Model/ApiModel';

@Injectable({
  providedIn: 'root',
})
export class GenericAPIHandlerService {
  httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  private setHeaders(key: string, value: string) {
    this.httpOptions.headers.set(key, value);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(() => new Error('Error occured, please try again'));
  }

  getAll(APIRoute: string): Observable<ApiModel> {
    return this.httpClient
      .get<ApiModel>(`${environment.APIURL}${APIRoute}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  getByID(id: number, APIRoute: string): Observable<ApiModel> {
    return this.httpClient
      .get<ApiModel>(`${environment.APIURL}${APIRoute}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  UniqeName(name: string, APIRoute: string): Observable<ApiModel> {
    return this.httpClient
      .get<ApiModel>(`${environment.APIURL}${APIRoute}/${name}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  Uniqetype(APIRoute: string): Observable<ApiModel> {
    return this.httpClient
      .get<ApiModel>(`${environment.APIURL}${APIRoute}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  add(newObject: any, APIRoute: string): Observable<any> {
    return this.httpClient.post(
      `${environment.APIURL}${APIRoute}`,
      JSON.stringify(newObject),
      this.httpOptions
    );
  }

  // search(searchItems: string[]) :Observable<ApiModel>
  // {

  // }

  // put(id:number, newObject: any):  Observable<ApiModel>
  // {

  // }

  // delete (id: any): Observable<ApiModel>
  // {

  // }
}
