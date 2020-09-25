import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// import { ContactModel } from './model.ts/contact-model';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private mailApi = 'http://mailthis.to/salumalimuhammed@gmail.com'
  constructor(private http: HttpClient) { }
  // PostMessage(input: any) {
  //   return this.http.post(this.api, input, { responseType: 'text' }).pipe(
  //     map(
  //       (response) => {
  //         if (response) {
  //           return response;
  //         }
  //       },
  //       (error: any) => {
  //         return error;
  //       }
  //     )
  //   )
  // }
  PostMessage(input: any) {
    return this.http.post(this.mailApi, input, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }
}
