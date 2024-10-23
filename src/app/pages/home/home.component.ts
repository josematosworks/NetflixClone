import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselComponent } from '@components/carousel/carousel.component';
import { FeaturedSectionComponent } from '@components/featured-section/featured-section.component';
import { HomeResolverData } from './home.resolver';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FeaturedSectionComponent, CarouselComponent],
  template: `
    <body class="bg-black text-white font-roboto">
      <app-featured-section [movie]="movieData.featuredMovie"></app-featured-section>
      <section class="py-8">
        <app-carousel title="Popular on Netflix" [movies]="movieData.popularMovies"></app-carousel>
        <app-carousel title="Trending Now" [movies]="movieData.trendingMovies"></app-carousel>
        <app-carousel title="Upcoming Movies" [movies]="movieData.upcomingMovies"></app-carousel>
      </section>
    </body>
  `
})
export class HomeComponent {
  movieData: HomeResolverData;

  constructor(private readonly route: ActivatedRoute) {
    this.movieData = this.route.snapshot.data['movieData'];
  }
}
