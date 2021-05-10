import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  //generate token
  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  //login : set token in localStorage
  public loginUser(token) {
    localStorage.setItem('Token', token);
    return true;
  }

  // isUserLoggedIn or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('Token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  // logout: remove token from localStorage
  public logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('User');
    return true;
  }

  //get token
  public getToken() {
    localStorage.getItem('Token');
  }

  //set User details
  public setUser(user) {
    localStorage.setItem('User', JSON.stringify(user));
  }

  //get User
  public getUser() {
    let userStr = localStorage.getItem('User');
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
