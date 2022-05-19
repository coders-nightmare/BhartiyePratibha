import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductCardComponent } from './product-list/product-card/product-card.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CompanyServiceComponent } from './company-service/company-service.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ApplicantsComponent } from './applicants/applicants.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    ProductListComponent,
    NavbarComponent,
    SearchComponent,
    ErrorPageComponent,
    ProductCardComponent,
    CompanyServiceComponent,
    AboutCompanyComponent,
    ContactFormComponent,
    ApplicantsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
