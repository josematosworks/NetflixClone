import { AsyncPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DefaultService, MovieUpcomingList200ResponseResultsInner } from '@app/tmdb-api';
import { MovieCardComponent } from '@components/movie-card/movie-card.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-trending-section',
  standalone: true,
  imports: [NgFor, AsyncPipe, MovieCardComponent],
  template: `
    <section class="bg-black py-12" role="region" aria-labelledby="trending-section-title">
      <div class="max-w-screen-xl mx-auto px-4">
        <h2 id="trending-section-title" class="text-3xl font-bold mb-6 text-white">{{ title }}</h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          role="list"
          aria-label="Trending movies grid">
          <app-movie-card
            *ngFor="let movie of movies$ | async; let i = index"
            [movie]="movie"
            [ranking]="i + 1"
            [isTopTen]="i < 10"
            [isRecentlyAdded]="false"
            role="listitem"
            [attr.aria-posinset]="i + 1"
            [attr.aria-setsize]="5">
          </app-movie-card>
        </div>
      </div>
    </section>
  `
})
export class TrendingSectionComponent implements OnInit {
  title = 'Trending Now';
  movies$!: Observable<MovieUpcomingList200ResponseResultsInner[]>;

  constructor(private readonly _apiService: DefaultService) {}

  ngOnInit(): void {
    this.movies$ = this._apiService.moviePopularList().pipe(map(data => (data.results || []).slice(0, 5)));
  }
}
