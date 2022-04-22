import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Helfer } from '../models/helfer.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Helfer[]> {
    return this.httpClient.get<Helfer[]>('/api/helfer');
  }
}
