import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private _http: HttpClient) {}
  getSchedule(idUser: number) {
    return this._http.get<any>(
      `http://localhost:8080/nutrition/lich-su-kham/${idUser}`
    );
  }
}
