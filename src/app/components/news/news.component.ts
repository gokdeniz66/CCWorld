import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BannerService } from '../../services/banner.service';
import { UpcomingAnime } from '../../interfaces/upcoming';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  randomAnime: UpcomingAnime | undefined;

  constructor(private bannerService: BannerService) {}

  ngOnInit(): void {
    this.fetchRandomUpcomingAnime();
  }

  fetchRandomUpcomingAnime() {
    this.bannerService.getUpcomingAnime().subscribe((animeShows) => {
      // Filter de animeShows om alleen die met een afbeelding weer te geven
      const showsWithImages = animeShows.filter(show => show.trailer.images.maximum_image_url !== null);

      // Als er animeShows met afbeeldingen zijn, selecteer dan willekeurig een daarvan
      if (showsWithImages.length > 0) {
        const randomIndex = Math.floor(Math.random() * showsWithImages.length);
        this.randomAnime = showsWithImages[randomIndex];
      } else {
        // Als er geen animeShows met afbeeldingen zijn, probeer dan opnieuw te laden
        this.fetchRandomUpcomingAnime();
      }
    });
  }
}
