import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { Anime } from '../../interfaces/anime';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  data: Anime[] = [];
  chosenType: string = 'Anime';
  sortShow: string = 'Popularity';
  shows: string[] = ['Anime', 'Manga'];

  constructor(private apiService: AnimeService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  onTypeChange(selectedType: string) {
    if (selectedType === 'shows') {
      this.chosenType = this.sortShow;
    }
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
