import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { IntroComponent } from './landing-page/intro/intro.component';
import { WhatWeDoComponent } from './landing-page/what-we-do/what-we-do.component';
import { TestimonialsComponent } from './landing-page/testimonials/testimonials.component';
import { ThumbnailComponent } from './catalogue/thumbnail/thumbnail.component';
import { OrderComponent } from './catalogue/order/order.component';
import { CalculateComponent } from './catalogue/calculate/calculate.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LandingPageComponent,
    CatalogueComponent,
    IntroComponent,
    WhatWeDoComponent,
    TestimonialsComponent,
    ThumbnailComponent,
    OrderComponent,
    CalculateComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
