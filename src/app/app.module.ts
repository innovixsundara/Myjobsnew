import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ApplyjobComponent } from './component/applyjob/applyjob.component';
import { ViewjobComponent } from './component/viewjob/viewjob.component';
import { LanguagepopupComponent } from './component/languagepopup/languagepopup.component';
import { SearchcompaniesComponent } from './component/searchcompanies/searchcompanies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ApplyjobComponent,
    ViewjobComponent,
    LanguagepopupComponent,
    SearchcompaniesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
