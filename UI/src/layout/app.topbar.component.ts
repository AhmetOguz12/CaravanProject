import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { UserInformation } from 'src/app/Module/userInformaiton';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(
    public layoutService: LayoutService,
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  user?: UserInformation;
  IsLoggedIn: boolean = false;
  roles: string[] = [];
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

  logout() {
    this.userService.logout();
    window.location.reload();
  }
}
