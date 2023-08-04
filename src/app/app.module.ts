import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductsComponent } from './product/product.component'; 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderModule } from '@builder.io/angular';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UiCardComponent } from './ui-card/ui-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroPageComponent,
    PageNotFoundComponent,
    LandingPageComponent,
    ProductsComponent,
    UiCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuilderModule.forRoot("a54c9ecf97f8469b9d9611d82580d299"),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
