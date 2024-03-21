import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Module/login';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { UserInformation } from '../Module/userInformaiton';
import { LoginResponse } from '../Module/loginResponse';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://localhost:7199/api/';
  $userInformation = new BehaviorSubject<UserInformation | undefined>(
    undefined
  );

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(loginModel: Login): Observable<LoginResponse> {
    let newPath = this.apiUrl + 'users/login';
    return this.http.post<LoginResponse>(newPath, {
      email: loginModel.email,
      password: loginModel.password,
      userName: loginModel.username,
    });
  }

  register(loginModel: Login) {
    let newPath = this.apiUrl + 'users/signUp';
    return this.http.post<Login>(newPath, loginModel);
  }

  setUser(user: UserInformation) {
    this.$userInformation.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserFromLocalStorage(): UserInformation | undefined {
    const userString = localStorage.getItem('token');
    if (!userString) return undefined;
    return JSON.parse(userString) as UserInformation;
    return undefined;
  }

  user(): Observable<UserInformation | undefined> {
    return this.$userInformation.asObservable();
  }

  //aldığımız tokennıj içerisindeki mail,password vs bilgilerini ukaşıp admin mi değil mi baktıp
  //nedeni navbarda sadece adminin göreceği yerler olduğu için anlamamız gerekiyordu
  TokenEncode() {
    let token = this.cookieService.get('Authorization');
    //  console.log('not replaced' + token);
    token = token.replace('Bearer', '');
    //  console.log('replaced token' + token);
    const decodedToken: any = jwtDecode(token);

    //tokenın içinden hangi bilgileri almak istiyorsam onları alttaki kod ile alıyorum
    const roles: string[] = Array.isArray(decodedToken.role)
      ? decodedToken.role
      : [decodedToken.role];

    console.log(roles);
    return roles;
  }

  logout() {
    this.cookieService.deleteAll();
  }
}
