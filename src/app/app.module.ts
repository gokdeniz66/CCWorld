import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AnimeService } from './anime.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration(), AnimeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
