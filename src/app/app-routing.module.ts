import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PerDaysPhotosComponent } from './pages/per-days-photos/per-days-photos.component';

const routes: Routes = [{path: '', component: HomeComponent}, {path: 'home', component: HomeComponent}, {path: 'contact', component: ContactComponent}, {path: 'per-days-photos', component: PerDaysPhotosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
