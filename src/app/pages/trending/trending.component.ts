import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieUpcomingList200ResponseResultsInner } from '@app/tmdb-api';
import { CarouselComponent } from '@components/carousel/carousel.component';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [CarouselComponent],
  template: `
    <main role="main" class="bg-black text-white py-8">
      <h1 id="trending-title" class="text-4xl font-bold mb-6 px-4" tabindex="0">Trending</h1>
      <section aria-labelledby="trending-movies-title" class="mb-8">
        <app-carousel title="Trending Movies" [movies]="trendingMovies" aria-label="Trending movies carousel">
        </app-carousel>
      </section>
      <section aria-labelledby="trending-tv-title" class="mb-8">
        <app-carousel title="Trending TV Shows" [movies]="trendingTVShows" aria-label="Trending TV shows carousel">
        </app-carousel>
      </section>
    </main>
  `
})
export class TrendingComponent {
  trendingMovies: MovieUpcomingList200ResponseResultsInner[];
  trendingTVShows: MovieUpcomingList200ResponseResultsInner[];

  constructor(private route: ActivatedRoute) {
    const data = this.route.snapshot.data['trendingData'];
    this.trendingMovies = data.trendingMovies;
    this.trendingTVShows = data.trendingTVShows;
  }
}
