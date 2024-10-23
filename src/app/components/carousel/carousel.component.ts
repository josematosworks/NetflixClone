import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MovieUpcomingList200ResponseResultsInner } from '@app/tmdb-api';
import { MovieCardComponent } from '@components/movie-card/movie-card.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  template: `
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
      <div class="flex space-x-4 overflow-x-scroll scrollbar-hide">
        <app-movie-card
          *ngFor="let movie of movies; trackBy: trackByMovieId"
          [movie]="movie"
          [isRecentlyAdded]="isRecentlyAdded(movie)"
          [isTopTen]="isTopTen(movie)">
        </app-movie-card>
      </div>
    </div>
  `
})
export class CarouselComponent {
  @Input() title: string = '';
  @Input() movies: MovieUpcomingList200ResponseResultsInner[] = [];

  trackByMovieId(_: number, movie: MovieUpcomingList200ResponseResultsInner): number {
    return movie.id ?? 0;
  }

  isRecentlyAdded(movie: MovieUpcomingList200ResponseResultsInner): boolean {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    return new Date(movie.release_date ?? '') > oneMonthAgo;
  }

  isTopTen(movie: MovieUpcomingList200ResponseResultsInner): boolean {
    return this.movies.indexOf(movie) < 10;
  }
}
