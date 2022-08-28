import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {IntroComponent} from './landing-page/intro/intro.component'
import {WhatWeDoComponent} from './landing-page/what-we-do/what-we-do.component'
import {TestimonialsComponent} from './landing-page/testimonials/testimonials.component'
import {CatalogueComponent } from './catalogue/catalogue.component';
import {ThumbnailComponent } from './catalogue/thumbnail/thumbnail.component';
import {OrderComponent } from './catalogue/order/order.component';
import {CalculateComponent } from './catalogue/calculate/calculate.component';


import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path: 'landingpage', component: LandingPageComponent},
  {path: 'intro', component: IntroComponent},
  {path: 'what-we-do', component: WhatWeDoComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'thumbnail', component: ThumbnailComponent},
  {path: 'order', component: OrderComponent},
  {path: 'calculate', component: CalculateComponent},
  {path: 'auth', component: AuthComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
