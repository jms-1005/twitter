import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TweetsComponent } from './tweets/tweets.component';
import { RecoComponent } from './reco/reco.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TweetsComponent,
    RecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
