import { Injectable } from '@angular/core';
import { MovieUpcomingList200ResponseResultsInner } from '@app/tmdb-api';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
  private watchList = new BehaviorSubject<MovieUpcomingList200ResponseResultsInner[]>([]);

  constructor() {
    // Initialize with data from local storage if available
    const storedWatchList = localStorage.getItem('watchList');
    if (storedWatchList) {
      this.watchList.next(JSON.parse(storedWatchList));
    }
  }

  getWatchList(): Observable<MovieUpcomingList200ResponseResultsInner[]> {
    return this.watchList.asObservable();
  }

  addToWatchList(movie: MovieUpcomingList200ResponseResultsInner): void {
    const currentList = this.watchList.value;
    if (!currentList.some(m => m.id === movie.id)) {
      const newList = [...currentList, movie];
      this.watchList.next(newList);
      this.updateLocalStorage(newList);
    }
  }

  removeFromWatchList(movieId: number): void {
    const newList = this.watchList.value.filter(movie => movie.id !== movieId);
    this.watchList.next(newList);
    this.updateLocalStorage(newList);
  }

  isInWatchList(movieId: number): boolean {
    return this.watchList.value.some(movie => movie.id === movieId);
  }

  private updateLocalStorage(list: MovieUpcomingList200ResponseResultsInner[]): void {
    localStorage.setItem('watchList', JSON.stringify(list));
  }
}
