import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Classes/user';
import { StoreServiceService } from './store-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  api_url: string = "https://wtsacademy.dedicateddevelopers.us/api/user/signup";
  apiUrl: string = "https://wtsacademy.dedicateddevelopers.us/api/user/signin";
  profile_api: string = "https://wtsacademy.dedicateddevelopers.us/api/user/profile-details";
  constructor(private http: HttpClient, private auth: StoreServiceService) { }

  addData(data: any): Observable<User[]> {
    console.log("Data for registration: ", data);
    return this.http.post<User[]>(this.api_url, data)
  }

  loginData(data: any): Observable<User[]> {
    return this.http.post<User[]>(this.apiUrl, data)
  }

  //profile of the user
  user_profile(): Observable<User[]> {

    return this.http.get<User[]>(this.profile_api, {
      headers: new HttpHeaders({
        'x-access-token': `${this.auth.getToken()}`
      }),
    });

  }

}
