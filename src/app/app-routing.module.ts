import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { ContactComponent } from './core/pages/contact/contact.component';

const routes: Routes = [{path: '', component: HomeComponent}, {path: 'home', component: HomeComponent}, {path: 'contact', component: ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
