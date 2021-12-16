import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/pages/home/home.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { ContactComponent } from './core/pages/contact/contact.component';
import { PerDaysPhotosComponent } from './core/pages/per-days-photos/per-days-photos.component';
import { ListImagesComponent } from './features/list-images/list-images.component';
import { ListImagesItemComponent } from './features/list-images-item/list-images-item.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    PerDaysPhotosComponent,
    ListImagesComponent,
    ListImagesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ListImagesItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
