import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HobbyComponent } from './hobby/hobby.component';
import { ContactComponent } from './contact/contact.component';
import {AppRoutingModule} from "app/app-routing.module";
import { WebDevComponent } from './web-dev/web-dev.component';
import { TravelComponent } from './travel/travel.component';
import { RollerSkatingComponent } from './roller-skating/roller-skating.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HobbyComponent,
    ContactComponent,
    WebDevComponent,
    TravelComponent,
    RollerSkatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
