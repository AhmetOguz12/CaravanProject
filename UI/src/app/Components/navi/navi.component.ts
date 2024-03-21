import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { isEmpty } from 'rxjs';
import { UserInformation } from 'src/app/Module/userInformaiton';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  user?: UserInformation;

  roles: string[] = [];

  IsLoggedIn: boolean = false;
  constructor(
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    // Token değerini cookie'den al
    this.IsLoggedIn = this.cookieService.check('Authorization');
    // Eğer token yoksa (yoksa veya boşsa)
    // console.log(this.IsLoggedIn);
    if (this.IsLoggedIn) {
      this.IsLoggedIn = true;
      // Diğer işlemleri gerçekleştir
      this.roles = this.userService.TokenEncode();
      console.log('roles ' + this.roles);
    }
  }
}
