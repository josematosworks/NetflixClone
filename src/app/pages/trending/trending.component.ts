import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieUpcomingList200ResponseResultsInner } from '@app/tmdb-api';
import { CarouselComponent } from '@components/carousel/carousel.component';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [CarouselComponent],
  template: `
    <div class="bg-black text-white py-8">
      <h1 class="text-4xl font-bold mb-6 px-4">Trending</h1>
      <app-carousel title="Trending Movies" [movies]="trendingMovies"></app-carousel>
      <app-carousel title="Trending TV Shows" [movies]="trendingTVShows"></app-carousel>
    </div>
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
