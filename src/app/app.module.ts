import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./sharePage/navbar/navbar.component";
import {FooterComponent} from "./sharePage/footer/footer.component";
import {HomeComponent} from "./pages/home/home.component";
import {MenuComponent} from "./pages/menu/menu.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {MenupageComponent} from "./pages/menupage/menupage.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HeroSectionComponent } from './pages/hero-section/hero-section.component';
import { DetailFromHomeComponent } from './pages/detail-from-home/detail-from-home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {HotToastModule, provideHotToastConfig} from "@ngneat/hot-toast";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    MenupageComponent,
    HeroSectionComponent,
    DetailFromHomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HotToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule, provideHotToastConfig(),],
  bootstrap: [AppComponent]
})
export class AppModule { }
