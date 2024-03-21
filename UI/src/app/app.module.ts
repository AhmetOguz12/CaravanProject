import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './Components/navi/navi.component';
import { CaravanComponent } from './Components/caravan/caravan.component';
import { BrandComponent } from './Components/brand/brand.component';
import { ColorComponent } from './Components/color/color.component';
import { CaravanDetailDtoComponent } from './Components/caravan-detail-dto/caravan-detail-dto.component';
import { CaravanAddComponent } from './Components/caravan-add/caravan-add.component';
import { BrandListComponent } from './Components/brand-list/brand-list.component';
import { BrandAddComponent } from './Components/brand-add/brand-add.component';
import { ColorListComponent } from './Components/color-list/color-list.component';
import { ColorAddComponent } from './Components/color-add/color-add.component';
import { BrandUpdateComponent } from './Components/brand-update/brand-update.component';
import { ColorUpdateComponent } from './Components/color-update/color-update.component';
import { CaravanUpdateComponent } from './Components/caravan-update/caravan-update.component';
import { RentalComponent } from './Components/rental/rental.component';
import { RentalDetailComponent } from './Components/rental-detail/rental-detail.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AppLayoutModule } from 'src/layout/app.layout.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { CascadeSelectModule } from 'primeng/cascadeselect';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CaravanComponent,
    BrandComponent,
    ColorComponent,
    CaravanDetailDtoComponent,
    CaravanAddComponent,
    BrandListComponent,
    BrandAddComponent,
    ColorListComponent,
    ColorAddComponent,
    BrandUpdateComponent,
    ColorUpdateComponent,
    CaravanUpdateComponent,
    RentalComponent,
    RentalDetailComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    CascadeSelectModule,
    RadioButtonModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    AppLayoutModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right', //ekranın neresinde çıksın demek
    }), // ToastrModule'ü AppModule içinde yapılandır
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    TableModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
