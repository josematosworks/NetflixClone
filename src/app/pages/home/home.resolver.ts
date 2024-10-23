import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DefaultService, MovieUpcomingList200ResponseResultsInner } from '@app/tmdb-api';
import { combineLatest, map } from 'rxjs';

export interface HomeResolverData {
  popularMovies: MovieUpcomingList200ResponseResultsInner[];
  trendingMovies: MovieUpcomingList200ResponseResultsInner[];
  upcomingMovies: MovieUpcomingList200ResponseResultsInner[];
  featuredMovie: MovieUpcomingList200ResponseResultsInner | null;
}

export const homeResolver: ResolveFn<HomeResolverData> = () => {
  const apiService = inject(DefaultService);

  return combineLatest({
    popular: apiService.moviePopularList(),
    trending: apiService.trendingMovies('week'),
    upcoming: apiService.movieUpcomingList()
  }).pipe(
    map(({ popular, trending, upcoming }) => {
      const popularMovies = popular.results || [];
      const trendingMovies = trending.results || [];
      const upcomingMovies = upcoming.results || [];
      const allMovies = [...popularMovies, ...trendingMovies, ...upcomingMovies];
      const featuredMovie = allMovies[Math.floor(Math.random() * allMovies.length)] || null;

      return {
        popularMovies,
        trendingMovies,
        upcomingMovies,
        featuredMovie
      };
    })
  );
};
