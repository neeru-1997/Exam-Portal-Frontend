import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  //to inform navbar that the user isloggedIn to update its state
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  //get current user data
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`);
  }

  //generate token
  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  //login : set token in localStorage
  public loginUser(token) {
    localStorage.setItem('token', token);
    return true;
  }

  // isUserLoggedIn or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  // logout: remove token from localStorage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //get token
  public getToken() {
    return localStorage.getItem('token');
  }

  //set User details
  public setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //get User
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  //get User role - assuming we have only one role per person
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
