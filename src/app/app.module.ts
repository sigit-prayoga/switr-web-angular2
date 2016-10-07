import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OrderByTimePipe } from './order-by-time.pipe';
import { EachSwitComponent } from './each-swit/each-swit.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderByTimePipe,
    EachSwitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
