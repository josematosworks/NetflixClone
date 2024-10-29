import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FaqSectionComponent } from '@components/faq-section/faq-section.component';
import { HeroSectionComponent } from '@components/hero-section/hero-section.component';
import { ReasonsToJoinSectionComponent } from '@components/reasons-to-join-section/reasons-to-join-section.component';
import { TrendingSectionComponent } from '@components/trending-section/trending-section.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HeroSectionComponent,
    TrendingSectionComponent,
    ReasonsToJoinSectionComponent,
    FaqSectionComponent
  ],
  template: `
    <main role="main" aria-label="Main content">
      <app-hero-section></app-hero-section>
      <app-trending-section></app-trending-section>
      <app-reasons-to-join-section></app-reasons-to-join-section>
      @defer (on viewport) {
        <app-faq-section></app-faq-section>
      } @placeholder {
        <div class="min-h-[100px]">Loading FAQs...</div>
      }
    </main>
  `
})
export class LandingComponent {}
