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
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [AppComponent, CardComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    MatMenuModule,
    MatRadioModule,
  ],
  providers: [provideClientHydration(), AnimeService, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
