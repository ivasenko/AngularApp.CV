import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HobbyComponent } from './hobby/hobby.component';
import { ContactComponent } from './contact/contact.component';
import {WebDevComponent} from "./web-dev/web-dev.component";
import {TravelComponent} from "./travel/travel.component";
import {RollerSkatingComponent} from "./roller-skating/roller-skating.component";

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'hobby', redirectTo: 'hobby/web-dev', pathMatch: 'full'},
  { path: 'hobby', children: [
    { path: 'web-dev', component: WebDevComponent},
    { path: 'travel', component: TravelComponent},
    { path: 'roller-skating', component: RollerSkatingComponent},
  ], component: HobbyComponent},
  { path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)
//     RouterModule.forChild([ { path: 'hobby/web-dev', component: WebDevComponent} ]),
//   RouterModule.forChild([ { path: 'hobby/travel', component: TravelComponent} ]),
// RouterModule.forChild([ { path: 'hobby/roller-skating', component: RollerSkatingComponent} ])
],
  exports: [ RouterModule ]
})
export class AppRoutingModule{}
