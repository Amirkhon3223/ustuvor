import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {MenuComponent} from "./pages/menu/menu.component";
import {MenupageComponent} from "./pages/menupage/menupage.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {DetailFromHomeComponent} from "./pages/detail-from-home/detail-from-home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'menu/:id', component:MenupageComponent},
  {path: 'decorative/:id', component:DetailFromHomeComponent},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
