import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WsjfService {

  constructor(private http: HttpClient) { }

  addWSJF(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/wsjf', data);
  }
}
