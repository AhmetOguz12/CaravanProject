import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { CaravanDetailDto } from 'src/app/Module/caravanDetailDto';
import { CaravanService } from 'src/app/Services/caravan.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-caravan-detail-dto',
  templateUrl: './caravan-detail-dto.component.html',
  styleUrls: ['./caravan-detail-dto.component.css'],
})
export class CaravanDetailDtoComponent implements OnInit {
  caravandetail: CaravanDetailDto[] = [];
  roles: string[] = [];
  IsLoggedIn: boolean = false;
  constructor(
    private caravanService: CaravanService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandid']) {
        this.getallbrandıd(params['brandid']);
      }
      if (params['colorid']) {
        this.getAllcolorod(params['colorid']);
      }
      if (params['brandid'] && params['colorid']) {
        this.getallbrandidwithcolorid(params['brandid'], params['colorid']);
      }
    });
    this.IsLoggedIn = this.cookieService.check('Authorization');
    // Eğer token yoksa (yoksa veya boşsa)
    // console.log(this.IsLoggedIn);
    if (this.IsLoggedIn) {
      this.IsLoggedIn = true;
      // Diğer işlemleri gerçekleştir
      this.roles = this.userService.TokenEncode();
      console.log('roles ' + this.roles);
    }

    this.getall();
  }

  getall() {
    this.caravanService.getAll().subscribe((response) => {
      this.caravandetail = response.data;
    });
  }

  getallbrandıd(brandid: number) {
    this.caravanService.getCaravanByBrand(brandid).subscribe((response) => {
      this.caravandetail = response.data;
    });
  }

  getAllcolorod(colorid: number) {
    this.caravanService.getCaravanByColor(colorid).subscribe((response) => {
      this.caravandetail = response.data;
    });
  }

  getallbrandidwithcolorid(branid: number, colorid: number) {
    this.caravanService
      .getCaravanByColorWithBrandId(branid, colorid)
      .subscribe((response) => {
        this.caravandetail = response.data;
      });
  }
  caravandelete(caravans: CaravanDetailDto) {
    this.caravandetail = this.caravandetail.filter(
      (response) => response !== caravans
    );
    this.caravanService.caravanDelete(caravans).subscribe();
  }
}
