import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MovieUpcomingList200ResponseResultsInner } from '@app/tmdb-api';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-featured-section',
  standalone: true,
  imports: [FontAwesomeModule, NgOptimizedImage, NgIf],
  template: `
    <section
      class="relative"
      *ngIf="movie"
      role="region"
      [attr.aria-label]="'Featured content: ' + (movie.title || 'Featured Show')">
      <img
        *ngIf="movie.backdrop_path"
        [ngSrc]="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path"
        [alt]="movie.title || 'Featured Show'"
        width="1280"
        height="720"
        priority
        class="w-full h-auto object-cover"
        role="img" />
      <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-8">
        <h1 class="text-4xl font-bold" tabindex="0">{{ movie.title }}</h1>
        <p class="mt-4 text-lg" tabindex="0">{{ movie.overview }}</p>
        <div class="flex mt-4 space-x-4" role="group" aria-label="Content actions">
          <button
            class="bg-white text-black px-4 py-2 rounded font-bold flex items-center"
            [attr.aria-label]="'Play ' + movie.title"
            (keydown.space)="$event.preventDefault()">
            <fa-icon [icon]="['fas', 'play']" class="mr-2" aria-hidden="true"></fa-icon> Play
          </button>
          <button
            class="bg-gray-700 text-white px-4 py-2 rounded font-bold flex items-center"
            [attr.aria-label]="'Add ' + movie.title + ' to my list'"
            (keydown.space)="$event.preventDefault()">
            <fa-icon [icon]="['fas', 'plus']" class="mr-2" aria-hidden="true"></fa-icon> My List
          </button>
        </div>
      </div>
    </section>
  `
})
export class FeaturedSectionComponent {
  @Input() movie: MovieUpcomingList200ResponseResultsInner | null = null;

  constructor(private readonly _library: FaIconLibrary) {
    this._library.addIcons(faPlay, faPlus);
  }
}
