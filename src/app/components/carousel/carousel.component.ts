import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MovieUpcomingList200ResponseResultsInner } from '@app/tmdb-api';
import { MovieCardComponent } from '@components/movie-card/movie-card.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  template: `
    <div
      class="mb-8"
      role="region"
      [attr.aria-label]="title + ' Carousel'"
      (keydown)="handleKeyboardNavigation($event)">
      <h2 class="text-2xl font-bold mb-4" id="carousel-{{ title }}">{{ title }}</h2>
      <div
        class="flex space-x-4 overflow-x-scroll scrollbar-hide"
        role="list"
        [attr.aria-labelledby]="'carousel-' + title">
        <app-movie-card
          *ngFor="let movie of movies; trackBy: trackByMovieId; let i = index"
          [movie]="movie"
          [isRecentlyAdded]="isRecentlyAdded(movie)"
          [isTopTen]="isTopTen(movie)"
          [attr.aria-posinset]="i + 1"
          [attr.aria-setsize]="movies.length"
          [attr.tabindex]="i === currentIndex ? 0 : -1"
          (focus)="currentIndex = i">
        </app-movie-card>
      </div>
    </div>
  `
})
export class CarouselComponent {
  @Input() title: string = '';
  @Input() movies: MovieUpcomingList200ResponseResultsInner[] = [];

  currentIndex = 0;

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

  handleKeyboardNavigation(event: KeyboardEvent): void {
    const maxIndex = this.movies.length - 1;

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        this.currentIndex = Math.min(this.currentIndex + 1, maxIndex);
        this.focusCurrentCard();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        this.currentIndex = Math.max(this.currentIndex - 1, 0);
        this.focusCurrentCard();
        break;
      case 'Home':
        event.preventDefault();
        this.currentIndex = 0;
        this.focusCurrentCard();
        break;
      case 'End':
        event.preventDefault();
        this.currentIndex = maxIndex;
        this.focusCurrentCard();
        break;
    }
  }

  private focusCurrentCard(): void {
    setTimeout(() => {
      const cards = document.querySelectorAll('app-movie-card');
      (cards[this.currentIndex] as HTMLElement)?.focus();
    });
  }
}
