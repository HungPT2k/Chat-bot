import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService2 {

  constructor(private _http: HttpClient) {}
  sendEmail(body:any) {
    return this._http.post<any>(
      `http://localhost:8080/nutrition/send-mail`,body
    );
  }
}
