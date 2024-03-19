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
  chosenType: string = 'Anime';
  sortShow: string = 'Popularity';

  constructor(private apiService: AnimeService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  shows: string[] = ['Anime', 'Manga'];
  sorting: string[] = ['Popularity', 'Newest'];

  onTypeChange(selectedType: string) {
    this.chosenType = selectedType;
    this.fetchData();
  }

  fetchData() {
    if (this.chosenType === 'Anime') {
      this.fetchAnime();
    } else if (this.chosenType === 'Manga') {
      this.fetchManga();
    }
  }

  fetchAnime() {
    this.apiService.getTopAnime().subscribe((animeShow) => {
      this.data = animeShow;
    });
  }

  fetchManga() {
    this.apiService.getTopManga().subscribe((mangaShow) => {
      this.data = mangaShow;
    });
  }
}
