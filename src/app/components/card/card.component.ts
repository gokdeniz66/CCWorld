import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { Anime } from '../../interfaces/anime';
import { animeRecommended } from '../../interfaces/animeRecommended';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  data: Anime[] = [];
  dataRecommended: animeRecommended[] = [];
  chosenType: string = 'Anime';
  sortShow: string = 'Popularity';

  constructor(private apiService: AnimeService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  shows: string[] = ['Anime', 'Manga'];
  sorting: string[] = ['Popularity', 'Recommended'];

  onTypeChange(selectedType: string) {
    if (selectedType === 'shows') {
        this.chosenType = this.sortShow;
    } else if (selectedType === 'sorting') {
        this.sortShow = this.chosenType;
    }
    this.fetchData();
}

fetchData() {
  if (this.chosenType === 'Anime' && this.sortShow === 'Popularity') {
    this.fetchAnimePopular();
  } else if (this.chosenType === 'Anime' && this.sortShow === 'Recommended') {
    this.fetchRecommendedAnime();
  } else if (this.chosenType === 'Manga') {
    this.fetchManga();
  }
}

  fetchAnimePopular() {
    this.apiService.getTopAnime().subscribe((animeShow) => {
      this.data = animeShow;
    });
  }

  fetchManga() {
    this.apiService.getTopManga().subscribe((mangaShow) => {
      this.data = mangaShow;
    });
  }

  fetchRecommendedAnime() {
    this.apiService.GetRecommendedAnime().subscribe((animeShow) => {
      this.dataRecommended = animeShow;
    });
  }
}
