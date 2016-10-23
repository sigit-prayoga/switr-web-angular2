import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OrderByTimePipe } from './order-by-time.pipe';
import { EachSwitComponent } from './each-swit/each-swit.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { StateRegistry, Ng2StateDeclaration, UIRouterModule, UIView } from 'ui-router-ng2';

export let loginState: Ng2StateDeclaration = {
  name: 'login',
  component: LoginComponent,
  url: '/'
}

export let homeState: Ng2StateDeclaration = {
  name: 'home',
  component: HomeComponent,
  url: '/home'
}

@NgModule({
  declarations: [
    AppComponent,
    OrderByTimePipe,
    EachSwitComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    UIRouterModule.forRoot({states: [loginState]}),
    UIRouterModule.forChild({states: [homeState]})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
