import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndextapsComponent } from './compoent/indextaps/indextaps.component';
import { BookdetailsComponent } from './compoent/bookdetails/bookdetails.component';


const routes: Routes = [
  {
    path: 'index', component: IndextapsComponent
  },
  {
    path: 'bookdetails', component: BookdetailsComponent,
  },
  {
    path: '', component: IndextapsComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
