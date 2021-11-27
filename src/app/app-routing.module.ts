import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackegesComponent } from './backeges/backeges.component';
import { BasketComponent } from './basket/basket.component';
import { TravelsDetailsComponent } from './travels-details/travels-details.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LogeInComponent } from './loge-in/loge-in.component';
const routes: Routes = [{
  path:"", component:BackegesComponent
},{
  path:"travels/:tripId", component: TravelsDetailsComponent
},{
  path: "cart", component: BasketComponent
},{
  path: "home", component: HomeComponent
},{
  path: "contact", component: ContactComponent
},{
  path: "gallery", component: GalleryComponent
},{
  path: "loge-in", component: LogeInComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
