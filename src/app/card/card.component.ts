import { Component, Input, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { Anime } from '../anime';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  data: Anime[] = [];
  chosenType: string = 'Series';
  sortShow: string = 'Popularity';

  constructor(private apiService: AnimeService) {}

  ngOnInit(): void {
    this.fetchAnime();
  }

  shows: string[] = ['Series', 'Movies'];
  sorting: string[] = ['Popularity', 'Newest'];

  fetchAnime() {
    this.apiService.getData().subscribe((animeShow) => {
      this.data = animeShow;
    });
  }
}
