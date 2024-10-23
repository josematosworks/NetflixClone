import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DefaultService, MovieUpcomingList200ResponseResultsInner } from '@app/tmdb-api';
import { forkJoin, map } from 'rxjs';

export interface NewAndPopularResolverData {
  newReleases: MovieUpcomingList200ResponseResultsInner[];
  popularMovies: MovieUpcomingList200ResponseResultsInner[];
  popularTVShows: MovieUpcomingList200ResponseResultsInner[];
}

export const newAndPopularResolver: ResolveFn<NewAndPopularResolverData> = () => {
  const apiService = inject(DefaultService);

  return forkJoin({
    newReleases: apiService.movieUpcomingList(),
    popularMovies: apiService.moviePopularList(),
    popularTVShows: apiService.tvSeriesPopularList()
  }).pipe(
    map(({ newReleases, popularMovies, popularTVShows }) => ({
      newReleases: newReleases.results || [],
      popularMovies: popularMovies.results || [],
      popularTVShows: popularTVShows.results || []
    }))
  );
};
