import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieUpcomingList200ResponseResultsInner } from '@app/tmdb-api';
import { CarouselComponent } from '@components/carousel/carousel.component';

@Component({
  selector: 'app-new-and-popular',
  standalone: true,
  imports: [CarouselComponent],
  template: `
    <div class="bg-black text-white py-8">
      <h1 class="text-4xl font-bold mb-6 px-4">New & Popular</h1>
      <app-carousel title="New Releases" [movies]="newReleases"></app-carousel>
      <app-carousel title="Popular Movies" [movies]="popularMovies"></app-carousel>
      <app-carousel title="Popular TV Shows" [movies]="popularTVShows"></app-carousel>
    </div>
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
