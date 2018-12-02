import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { ApiServiceService } from './api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    BookInfoComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
