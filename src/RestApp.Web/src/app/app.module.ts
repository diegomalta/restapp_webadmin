import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Feature Modules */
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';

// services
import { AdminService } from './shared/services/admin.service';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    UserModule,
    HomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule,
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
