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
    <main role="main" class="bg-black text-white font-roboto" aria-label="Netflix home content">
      <app-featured-section [movie]="movieData.featuredMovie" aria-label="Featured movie section">
      </app-featured-section>
      <section class="py-8" aria-label="Movie collections">
        <app-carousel
          title="Popular on Netflix"
          [movies]="movieData.popularMovies"
          aria-label="Popular movies carousel">
        </app-carousel>
        <app-carousel title="Trending Now" [movies]="movieData.trendingMovies" aria-label="Trending movies carousel">
        </app-carousel>
        <app-carousel title="Upcoming Movies" [movies]="movieData.upcomingMovies" aria-label="Upcoming movies carousel">
        </app-carousel>
      </section>
    </main>
  `
})
export class HomeComponent {
  movieData: HomeResolverData;

  constructor(private readonly route: ActivatedRoute) {
    this.movieData = this.route.snapshot.data['movieData'];
  }
}
