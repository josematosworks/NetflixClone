import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChild, faDownload, faMobileAlt, faTv } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reasons-to-join-section',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="bg-gray-900 py-12" aria-labelledby="reasons-heading">
      <div class="max-w-screen-xl mx-auto">
        <h2 id="reasons-heading" class="text-3xl font-bold mb-6">More Reasons to Join</h2>
        <div class="grid grid-cols-4 gap-6" role="list">
          <!-- Reason Items -->
          <div
            class="bg-gray-800 p-6 rounded-lg"
            role="listitem"
            *ngFor="let reason of reasons"
            tabindex="0"
            [attr.aria-label]="reason.title + ': ' + reason.description">
            <fa-icon [icon]="reason.icon" [ngClass]="reason.iconColor + ' text-3xl'" aria-hidden="true"></fa-icon>
            <h3 class="mt-4 font-bold text-xl">{{ reason.title }}</h3>
            <p class="mt-2">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ReasonsToJoinSectionComponent {
  constructor(private readonly _library: FaIconLibrary) {
    this._library.addIcons(faTv, faDownload, faMobileAlt, faChild);
  }

  reasons = [
    {
      icon: faTv,
      iconColor: 'text-purple-500',
      title: 'Enjoy on your TV',
      description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
    },
    {
      icon: faDownload,
      iconColor: 'text-pink-500',
      title: 'Download your shows to watch offline',
      description: 'Save your favorites easily and always have something to watch.'
    },
    {
      icon: faMobileAlt,
      iconColor: 'text-purple-500',
      title: 'Watch everywhere',
      description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
    },
    {
      icon: faChild,
      iconColor: 'text-pink-500',
      title: 'Create profiles for kids',
      description:
        'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
    }
  ];
}
