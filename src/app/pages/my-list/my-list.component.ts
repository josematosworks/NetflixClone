import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieUpcomingList200ResponseResultsInner } from '@app/tmdb-api';
import { CarouselComponent } from '@components/carousel/carousel.component';
import { WatchListService } from '@core/services/watch-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  template: `
    <main class="bg-black text-white py-8" role="main">
      <h1 class="text-4xl font-bold mb-6 px-4" tabindex="0">My List</h1>
      <ng-container *ngIf="myList$ | async as myList">
        <app-carousel
          *ngIf="myList.length > 0"
          title="My Favorites"
          [movies]="myList"
          role="region"
          aria-label="My favorite movies carousel">
        </app-carousel>
        <p *ngIf="myList.length === 0" class="text-center text-xl" role="status" aria-live="polite" tabindex="0">
          Your watch list is empty.
        </p>
      </ng-container>
    </main>
  `
})
export class MyListComponent implements OnInit {
  myList$!: Observable<MovieUpcomingList200ResponseResultsInner[]>;

  constructor(private watchListService: WatchListService) {}

  ngOnInit(): void {
    this.myList$ = this.watchListService.getWatchList();
  }
}
