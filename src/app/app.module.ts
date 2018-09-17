import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { AlertModule } from 'ngx-bootstrap';
// import {AngularFontAwesomeModule} from "angular-font-awesome";
// import { NgwWowModule } from 'ngx-wow';


import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AiComponent } from './views/ai/ai.component';
import { ContactComponent } from './views/contact/contact.component';
import { GameDevComponent } from './views/game-dev/game-dev.component';
import { MarketingComponent } from './views/marketing/marketing.component';
import { SwDevComponent } from './views/sw-dev/sw-dev.component';
import { ToolBarComponent } from './views/tool-bar/tool-bar.component';
import { MobileDevComponent } from './views/mobile-dev/mobile-dev.component';
import { AboutCompanyComponent } from './views/about-company/about-company.component';
import {MailSendingService} from "./services/mail-sending.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { MsgPopupService } from './services/msg-popup.service';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from "@ng-select/ng-select";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AiComponent,
    ContactComponent,
    GameDevComponent,
    MarketingComponent,
    SwDevComponent,
    ToolBarComponent,
    MobileDevComponent,
    AboutCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    Ng4LoadingSpinnerModule.forRoot(),
    NgSelectModule
    // AngularFontAwesomeModule
  ],
  providers: [
    MailSendingService,
    MsgPopupService,
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
        notFoundText: 'Custom not found'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
