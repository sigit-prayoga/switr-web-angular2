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

import { AngularFireModule } from 'angularfire2';
import { RouterModule }   from '@angular/router';

export const firebaseConfig = {
  apiKey: "AIzaSyDB0fe_oj9rQzibHCPkbtISDAP-hfVxvwo",
  authDomain: "switr-2eb0e.firebaseapp.com",
  databaseURL: "https://switr-2eb0e.firebaseio.com",
  storageBucket: "switr-2eb0e.appspot.com",
  messagingSenderId: "493551355086"
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
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ], {
      useHash: true
    }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }