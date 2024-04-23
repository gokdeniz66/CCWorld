import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ModelResponse, Anime } from '../interfaces/anime';
import {
  animeRecommended,
  animeRecommendedResponse,
} from '../interfaces/animeRecommended';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private http: HttpClient) {}

  // Methode om gegevens op te halen van de API
  getTopAnime(): Observable<Anime[]> {
    return this.http
      .get<ModelResponse>('https://api.jikan.moe/v4/top/anime')
      .pipe(map((response: ModelResponse) => response.data || []));
  }

  getTopManga(): Observable<Anime[]> {
    return this.http
      .get<ModelResponse>('https://api.jikan.moe/v4/top/manga')
      .pipe(map((response: ModelResponse) => response.data || []));
  }

  GetRecommendedAnime(): Observable<animeRecommended[]> {
    return this.http
      .get<animeRecommendedResponse>(
        'https://api.jikan.moe/v4/recommendations/anime'
      )
      .pipe(map((response: animeRecommendedResponse) => response.dataRecommended || []));
  }
}
