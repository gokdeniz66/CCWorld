import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'home', component: CardComponent },
  { path: 'upcoming', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
