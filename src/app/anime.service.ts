import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AnimeResponse, Anime } from './anime';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private http: HttpClient) {}

  // Methode om gegevens op te halen van de API
  getData(): Observable<Anime[]> {
    return this.http
      .get<AnimeResponse>('https://api.jikan.moe/v4/anime')
      .pipe(map((response: AnimeResponse) => response.data || []));
  }
}
