import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Login } from 'src/app/Module/login';
import { LoginResponse } from 'src/app/Module/loginResponse';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginModule: Login;
  loginResponse: LoginResponse;

  EmailorUserName: string = '';
  constructor(
    private LoginService: UserService,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.loginModule = {
      email: '',
      password: '',
      username: '',
    };
  }

  showAlert: boolean = false; // Tanımlama ve başlatma

  login() {
    this.loginModule.email = this.EmailorUserName;
    this.loginModule.username = this.EmailorUserName;
    this.LoginService.login(this.loginModule).subscribe(
      (response) => {
        this.loginResponse = response;

        this.cookieService.set('Authorization', `Bearer ${response.token}`);
        this.router.navigateByUrl('/caravans');
      },
      (error) => {
        this.showAlert = true;
        // alert('Kullanıcı Adı veya Parola Hatalı');
      }
    );
  }
}
