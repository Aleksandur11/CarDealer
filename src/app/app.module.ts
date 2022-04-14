import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SliderComponent } from './feature/homepage/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MegaMenuItem,MenuItem} from 'primeng/api';
import { CoreModule } from './core/core.module';
import { HomepageModule } from './feature/homepage/homepage.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './feature/pages/pages.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    AuthModule,
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    CoreModule,
    HomepageModule,
    PagesModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
