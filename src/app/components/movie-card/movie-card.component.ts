import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MovieUpcomingList200ResponseResultsInner } from '@app/tmdb-api';
import { WatchListService } from '@core/services/watch-list.service';
import { AuthService } from '@core/services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FontAwesomeModule],
  template: `
    <div class="relative w-48">
      <img
        [ngSrc]="imageUrl"
        [alt]="movie.title"
        [width]="192"
        [height]="288"
        ngSrcset="192w, 384w, 576w"
        sizes="(max-width: 768px) 100vw, 192px"
        (error)="onImageError($event)"
        (load)="onImageLoad()"
        class="w-full h-auto" />
      <div *ngIf="isLoading" class="absolute inset-0 flex items-center justify-center bg-gray-200">
        <span class="text-gray-500">Loading...</span>
      </div>
      <div *ngIf="!isLoading" class="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black to-transparent">
        <span class="text-white text-xl font-bold">{{ movie.title }}</span>
        <span *ngIf="movie.vote_average" class="text-white text-sm ml-2">{{
          movie.vote_average | number: '1.1-1'
        }}</span>
      </div>
      <div
        *ngIf="isRecentlyAdded"
        class="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 m-2 rounded">
        New
      </div>
      <div
        *ngIf="isTopTen"
        class="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 m-2 rounded">
        TOP 10
      </div>
      <button
        *ngIf="isAuthenticated"
        (click)="toggleWatchList()"
        class="absolute bottom-2 right-2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700">
        <fa-icon [icon]="isInWatchList ? faMinus : faPlus"></fa-icon>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnInit, OnDestroy {
  @Input() movie!: MovieUpcomingList200ResponseResultsInner;
  @Input() isRecentlyAdded = false;
  @Input() isTopTen = false;
  @Input() ranking?: number;

  isLoading = true;
  isInWatchList = false;
  isAuthenticated = false;
  faPlus = faPlus;
  faMinus = faMinus;

  private authSubscription: Subscription | null = null;

  constructor(
    private watchListService: WatchListService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.authState().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      if (isAuthenticated) {
        this.isInWatchList = this.watchListService.isInWatchList(this.movie.id ?? 0);
      } else {
        this.isInWatchList = false;
      }
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  get imageUrl(): string {
    return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
  }

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'assets/images/placeholder.jpg';
  }

  onImageLoad(): void {
    this.isLoading = false;
  }

  toggleWatchList(): void {
    if (this.isInWatchList) {
      this.watchListService.removeFromWatchList(this.movie.id ?? 0);
    } else {
      this.watchListService.addToWatchList(this.movie);
    }
    this.isInWatchList = !this.isInWatchList;
  }
}
