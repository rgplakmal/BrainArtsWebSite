import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./views/home/home.component";
import { ContactComponent } from './views/contact/contact.component';
import { AiComponent } from './views/ai/ai.component';
import { GameDevComponent } from './views/game-dev/game-dev.component';
import { MarketingComponent } from './views/marketing/marketing.component';
import { SwDevComponent } from './views/sw-dev/sw-dev.component';
import { MobileDevComponent } from './views/mobile-dev/mobile-dev.component'
import { AppComponent } from './app.component';
import { Component } from '../../node_modules/@angular/core';

const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'ai-ml-dl', component: AiComponent},
  { path: 'game-development', component: GameDevComponent},
  { path: 'digital-marketing', component: MarketingComponent},
  { path: 'sw-development', component: SwDevComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'mobileDev', component: MobileDevComponent},
  // { path: 'packages/:id', component: PackagesComponent },
  { path: '**', redirectTo: '/home' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{ enableTracing: true }) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
