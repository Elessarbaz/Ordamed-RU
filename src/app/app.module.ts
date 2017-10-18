import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DealsComponent } from './components/deals/deals.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { VerifyService } from "./services/verify.service";
import {AuthenticationService} from "./services/authentication.service";
import {DealService} from "./services/deal.service";
import {UserService} from "./services/user.service";
import {NotifyService} from "./services/notify.service";
import {ClientService} from "./services/client.service";
import {ProductsService} from "./services/products.service";
import {JsonService} from "./services/json.service";

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      DealsComponent,
      UsersComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
  ],
  providers: [
      AuthGuard,
      VerifyService,
      AuthenticationService,
      DealService,
      UserService,
      NotifyService,
      ClientService,
      ProductsService,
      JsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
