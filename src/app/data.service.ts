import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUserById(id:string): Promise<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users/${id}`).toPromise();
  }
}
