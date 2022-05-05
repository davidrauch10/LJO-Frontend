import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Helfer } from '../models/helfer.models';

@Injectable({
  providedIn: 'root'
})
export class HelferService {
  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Helfer[]> {
    // return this.httpClient.get<Helfer[]>('/api/helfer');
    return of([
      {
        id: 1,
        name: "name",
        adress: "lange straße 1",
        phonenumber: "123457"
      },
      {
        id: 2,
        name: "name",
        adress: "lange straße 1",
        phonenumber: "123457"
      }
    ]);
  }
}
