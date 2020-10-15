import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RummyPlayerComponent } from './rummy-player/rummy-player.component';
import { RummyPlayerItemComponent } from './rummy-player-item/rummy-player-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RummyPlayerComponent,
    RummyPlayerItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
