import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaravanComponent } from './Components/caravan/caravan.component';
import { CaravanDetailDtoComponent } from './Components/caravan-detail-dto/caravan-detail-dto.component';
import { CaravanAddComponent } from './Components/caravan-add/caravan-add.component';
import { BrandComponent } from './Components/brand/brand.component';
import { BrandListComponent } from './Components/brand-list/brand-list.component';
import { BrandAddComponent } from './Components/brand-add/brand-add.component';
import { ColorComponent } from './Components/color/color.component';
import { ColorListComponent } from './Components/color-list/color-list.component';
import { ColorAddComponent } from './Components/color-add/color-add.component';
import { BrandUpdateComponent } from './Components/brand-update/brand-update.component';
import { ColorUpdateComponent } from './Components/color-update/color-update.component';
import { CaravanUpdateComponent } from './Components/caravan-update/caravan-update.component';
import { RentalComponent } from './Components/rental/rental.component';
import { RentalDetailComponent } from './Components/rental-detail/rental-detail.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { loginGuard } from './guards/login.guard';
import { AppLayoutComponent } from 'src/layout/app.layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: CaravanDetailDtoComponent },
      {
        path: 'caravans',
        component: CaravanDetailDtoComponent,
      },
      { path: 'caravans/brand/:brandid', component: CaravanDetailDtoComponent },
      {
        path: 'caravans/color/:colorid',
        component: CaravanDetailDtoComponent,
      },
      {
        path: 'caravans/brand/:brandid/color/:colorid',
        component: CaravanDetailDtoComponent,
      },
      {
        path: 'caravan-add',
        component: CaravanAddComponent,
      },
      { path: 'caravan-update/:id', component: CaravanUpdateComponent },
      {
        path: 'markalar',
        component: BrandListComponent,
      },
      {
        path: 'renkler',
        component: ColorListComponent,
      },
      {
        path: 'brand-add',
        component: BrandAddComponent,
      },

      { path: 'brand-update/:id', component: BrandUpdateComponent },
      { path: 'color-add', component: ColorAddComponent },
      { path: 'color-update/:id', component: ColorUpdateComponent },

      { path: 'rental-detail', component: RentalDetailComponent },
      {
        path: 'rental-detail/:id',
        component: RentalDetailComponent,
        canActivate: [loginGuard],
      },
      { path: 'kiralamalar', component: RentalComponent },
    ],
  },
  { path: 'Giriş-Yap', component: LoginComponent },
  { path: 'Kayıt-Ol', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
