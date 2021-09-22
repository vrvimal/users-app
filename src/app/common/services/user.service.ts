import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IUser } from '../module/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL = environment.usersAPI;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    console.log('tets');
    return this.http.get<IUser[]>(this.baseURL + '/users');
  }
}
