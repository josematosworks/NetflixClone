import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import { ModalDirective } from '@app/directives/modal.directive';
import { MovieUpcomingList200ResponseResultsInner } from '@app/tmdb-api';
import { AuthService } from '@core/services/auth.service';
import { WatchListService } from '@core/services/watch-list.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FontAwesomeModule, ModalDirective],
  template: `
    <div class="relative w-48" appModal>
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

      <div class="modal hidden fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div class="relative w-[667px] h-[612px] rounded-lg overflow-hidden">
          <div
            class="absolute inset-0 bg-cover bg-center"
            [ngStyle]="{ 'background-image': 'url(' + backdropUrl + ')' }"></div>
          <button (click)="closeModal()" class="absolute top-0 right-0 text-white text-4xl pt-0 pr-4 z-10">
            &times;
          </button>
          <div
            class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-6"
            style="max-height: 100%; overflow-y: auto;">
            <h2 class="text-3xl font-bold mt-4">{{ movie.title }}</h2>
            <div class="flex space-x-2 mt-2">
              <span class="bg-gray-700 px-2 py-1 rounded">2024</span>
              <span class="bg-gray-700 px-2 py-1 rounded">18+</span>
              <span class="bg-gray-700 px-2 py-1 rounded">Movie</span>
              <span class="bg-gray-700 px-2 py-1 rounded">Action</span>
              <span class="bg-gray-700 px-2 py-1 rounded">Thrillers</span>
            </div>
            <p class="mt-4">{{ movie.overview }}</p>
            <button class="mt-4 bg-red-600 text-white px-6 py-2 rounded">Get Started</button>
          </div>
        </div>
      </div>
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
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2
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
    return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
  }

  get backdropUrl(): string {
    return `https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`;
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

  closeModal(): void {
    const modal = this.renderer.selectRootElement('.modal');
    if (modal) {
      this.renderer.addClass(modal, 'hidden');
    }
  }
}
