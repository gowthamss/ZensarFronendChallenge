import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from './users-interface';

@Injectable()
export class UsersService {
  userProfilesApi =
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json';

  constructor(private http: HttpClient) {}

  getUserProfileData(): any {
    return this.http.get<Config>(this.userProfilesApi);
  }
}
