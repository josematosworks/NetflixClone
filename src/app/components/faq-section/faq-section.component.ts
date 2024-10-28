import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section class="bg-black py-12" role="region" aria-label="Frequently Asked Questions">
      <div class="max-w-screen-lg mx-auto">
        <h2 class="text-3xl font-bold mb-6" id="faq-heading">Frequently Asked Questions</h2>
        <div class="flex flex-col gap-2">
          <div *ngFor="let faq of faqs; let i = index" class="bg-gray-800">
            <button
              [attr.aria-expanded]="isExpanded(i)()"
              [attr.aria-controls]="'faq-answer-' + i"
              class="w-full p-4 flex justify-between items-center"
              (click)="toggleFaq(i)"
              (keydown.space)="$event.preventDefault(); toggleFaq(i)">
              <span>{{ faq.question }}</span>
              <fa-icon [icon]="isExpanded(i)() ? faMinus : faPlus" [attr.aria-hidden]="true"> </fa-icon>
            </button>
            <div [id]="'faq-answer-' + i" class="px-4 pb-4" [class.hidden]="!isExpanded(i)()">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FaqSectionComponent {
  faqs = [
    {
      question: 'What is Netflix?',
      answer:
        'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'
    },
    {
      question: 'How much does Netflix cost?',
      answer:
        'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.'
    },
    { question: 'Where can I watch?' },
    { question: 'How do I cancel?' },
    { question: 'What can I watch on Netflix?' },
    { question: 'Is Netflix good for kids?' }
  ];

  faPlus = faPlus;
  faMinus = faMinus;

  private expandedStates = this.faqs.map(() => signal(false));

  isExpanded(index: number) {
    return this.expandedStates[index];
  }

  toggleFaq(index: number) {
    this.expandedStates[index].set(!this.expandedStates[index]());
  }

  constructor(private readonly _library: FaIconLibrary) {
    this._library.addIcons(faPlus, faMinus);
  }
}
