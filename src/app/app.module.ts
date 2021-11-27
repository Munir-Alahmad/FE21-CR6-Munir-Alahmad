import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackegesComponent } from './backeges/backeges.component';
import { FooterComponent } from './footer/footer.component';
import { TravelsDetailsComponent } from './travels-details/travels-details.component';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LogeInComponent } from './loge-in/loge-in.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackegesComponent,
    FooterComponent,
    TravelsDetailsComponent,
    BasketComponent,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    LogeInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
