import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieUpcomingList200ResponseResultsInner } from '@app/tmdb-api';
import { CarouselComponent } from '@components/carousel/carousel.component';

@Component({
  selector: 'app-new-and-popular',
  standalone: true,
  imports: [CarouselComponent],
  template: `
    <main class="bg-black text-white py-8" role="main">
      <h1 class="text-4xl font-bold mb-6 px-4" tabindex="0">New & Popular</h1>
      <section aria-labelledby="new-releases-heading">
        <app-carousel
          id="new-releases-heading"
          title="New Releases"
          [movies]="newReleases"
          role="region"
          aria-label="New movie releases carousel">
        </app-carousel>
      </section>
      <section aria-labelledby="popular-movies-heading">
        <app-carousel
          id="popular-movies-heading"
          title="Popular Movies"
          [movies]="popularMovies"
          role="region"
          aria-label="Popular movies carousel">
        </app-carousel>
      </section>
      <section aria-labelledby="popular-tv-heading">
        <app-carousel
          id="popular-tv-heading"
          title="Popular TV Shows"
          [movies]="popularTVShows"
          role="region"
          aria-label="Popular TV shows carousel">
        </app-carousel>
      </section>
    </main>
  `
})
export class NewAndPopularComponent {
  newReleases: MovieUpcomingList200ResponseResultsInner[];
  popularMovies: MovieUpcomingList200ResponseResultsInner[];
  popularTVShows: MovieUpcomingList200ResponseResultsInner[];

  constructor(private route: ActivatedRoute) {
    const data = this.route.snapshot.data['newAndPopularData'];
    this.newReleases = data.newReleases;
    this.popularMovies = data.popularMovies;
    this.popularTVShows = data.popularTVShows;
  }
}
