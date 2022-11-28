import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyjobComponent } from './component/applyjob/applyjob.component';
import { LanguagepopupComponent } from './component/languagepopup/languagepopup.component';
import { SearchcompaniesComponent } from './component/searchcompanies/searchcompanies.component';
import { ViewjobComponent } from './component/viewjob/viewjob.component';


import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'applyjob',component:ApplyjobComponent},
  {path:'viewjob',component:ViewjobComponent},
  {path:'language',component:LanguagepopupComponent},
  {path:'companies',component:SearchcompaniesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LoginComponent,ApplyjobComponent,ViewjobComponent,LanguagepopupComponent,SearchcompaniesComponent]
