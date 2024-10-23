import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="bg-black py-12">
      <div class="max-w-screen-lg mx-auto">
        <h2 class="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div *ngFor="let faq of faqs" class="bg-gray-800 p-4 mb-2">
          <div class="flex justify-between items-center">
            <span>{{ faq.question }}</span>
            <fa-icon [icon]="faPlus"></fa-icon>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FaqSectionComponent {
  faqs = [
    { question: 'What is Netflix?' },
    { question: 'How much does Netflix cost?' },
    { question: 'Where can I watch?' },
    { question: 'How do I cancel?' },
    { question: 'What can I watch on Netflix?' },
    { question: 'Is Netflix good for kids?' }
  ];

  faPlus = faPlus;

  constructor(private readonly _library: FaIconLibrary) {
    this._library.addIcons(faPlus);
  }
}
