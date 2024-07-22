import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UpcomingAnime, UpcomingAnimeResponse } from '../interfaces/upcoming';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor(private http: HttpClient) {}

  getUpcomingAnime(): Observable<UpcomingAnime[]> {
    return this.http
      .get<UpcomingAnimeResponse>('https://api.jikan.moe/v4/seasons/upcoming')
      .pipe(map((response: UpcomingAnimeResponse) => response.data || []));
  }
}
