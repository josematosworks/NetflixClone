import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DefaultService, MovieUpcomingList200ResponseResultsInner } from '@app/tmdb-api';
import { forkJoin, map } from 'rxjs';

export interface TrendingResolverData {
  trendingMovies: MovieUpcomingList200ResponseResultsInner[];
  trendingTVShows: MovieUpcomingList200ResponseResultsInner[];
}

export const trendingResolver: ResolveFn<TrendingResolverData> = () => {
  const apiService = inject(DefaultService);

  return forkJoin({
    trendingMovies: apiService.trendingMovies('week'),
    trendingTVShows: apiService.trendingTv('week')
  }).pipe(
    map(({ trendingMovies, trendingTVShows }) => ({
      trendingMovies: trendingMovies.results || [],
      trendingTVShows: trendingTVShows.results || []
    }))
  );
};
