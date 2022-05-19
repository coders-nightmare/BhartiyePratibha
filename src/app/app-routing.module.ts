import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';
import { CompanyServiceComponent } from './company-service/company-service.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ApplicantsComponent } from './applicants/applicants.component';

const routes: Routes = [
  {

    path:'',
    redirectTo:'/home',
    pathMatch:'full'

  },
  {
    path:'home',
    component:SearchComponent
  },
  {
    path:'about',
    component:AboutCompanyComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'applicants',
    component:ApplicantsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'services',
    component:CompanyServiceComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'services/contact/:id',
    component:ContactFormComponent,
    canActivate:[AuthGuard]
  },
  {path:'search',children:[
    {path:'products',component:ProductListComponent},
    {
      path:'product/productDetails/:id',
      component:ProductDetailsComponent,
      canActivate:[AuthGuard]
    } 
  ]},
  {path:'**',component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
