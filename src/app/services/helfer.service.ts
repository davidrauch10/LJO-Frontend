import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Helfer } from '../models/helfer.models';

@Injectable({
  providedIn: 'root'
})
export class HelferService {
  constructor(private httpClient: HttpClient) { }

  public getHelferliste(): Observable<Helfer[]> {
    // return this.httpClient.get<Helfer[]>('/api/helfer');
    return of([
      {
        id: 1,
        name: "Fabian Zimmermann",
        birthday: "01.01.1999",
        adress: "Duenserstrasse 1, Dünserberg",
        phonenumber: "06640815"
      },
      {
        id: 2,
        name: "name",
        birthday: "24.12.2000",
        adress: "lange straße 1",
        phonenumber: "123457"
      }
    ]);
  }
}
