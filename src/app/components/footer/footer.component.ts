import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <footer class="bg-black py-8" role="contentinfo">
      <div class="max-w-screen-xl mx-auto">
        <!-- Social Media Icons -->
        <nav class="flex space-x-6 mb-6 text-2xl" aria-label="Social media links">
          <a
            href="#"
            class="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
            aria-label="Visit our Facebook page">
            <fa-icon [icon]="['fab', 'facebook']"></fa-icon>
          </a>
          <a
            href="#"
            class="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
            aria-label="Visit our Instagram page">
            <fa-icon [icon]="['fab', 'instagram']"></fa-icon>
          </a>
          <a
            href="#"
            class="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
            aria-label="Visit our Twitter page">
            <fa-icon [icon]="['fab', 'twitter']"></fa-icon>
          </a>
          <a
            href="#"
            class="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
            aria-label="Visit our YouTube channel">
            <fa-icon [icon]="['fab', 'youtube']"></fa-icon>
          </a>
        </nav>

        <!-- Footer Links -->
        <nav class="grid grid-cols-4 gap-4 text-sm text-gray-400" aria-label="Footer navigation">
          <div role="region" aria-label="Help and information">
            <ul class="space-y-4">
              <li><a href="#" class="hover:underline">FAQ</a></li>
              <li><a href="#" class="hover:underline">Investor Relations</a></li>
              <li><a href="#" class="hover:underline">Ways to Watch</a></li>
              <li><a href="#" class="hover:underline">Corporate Information</a></li>
              <li><a href="#" class="hover:underline">Legal Notices</a></li>
            </ul>
          </div>
          <ul class="space-y-4">
            <li><a href="#" class="hover:underline">Help Center</a></li>
            <li><a href="#" class="hover:underline">Jobs</a></li>
            <li><a href="#" class="hover:underline">Terms of Use</a></li>
            <li><a href="#" class="hover:underline">Contact Us</a></li>
            <li><a href="#" class="hover:underline">Only on Netflix</a></li>
          </ul>
          <ul class="space-y-4">
            <li><a href="#" class="hover:underline">Account</a></li>
            <li><a href="#" class="hover:underline">Redeem Gift Cards</a></li>
            <li><a href="#" class="hover:underline">Privacy</a></li>
            <li><a href="#" class="hover:underline">Speed Test</a></li>
            <li><a href="#" class="hover:underline">Ad Choices</a></li>
          </ul>
          <ul class="space-y-4">
            <li><a href="#" class="hover:underline">Media Center</a></li>
            <li><a href="#" class="hover:underline">Buy Gift Cards</a></li>
            <li><a href="#" class="hover:underline">Cookie Preferences</a></li>
            <li><a href="#" class="hover:underline">Legal Guarantee</a></li>
          </ul>
        </nav>

        <!-- Language Selector -->
        <div class="flex mt-6">
          <button
            class="flex items-center text-gray-400 border border-gray-400 px-4 py-2 rounded hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Select language. Current language: English">
            <i class="fas fa-globe mr-2" aria-hidden="true"></i> English
          </button>
        </div>

        <div class="text-left text-gray-400 text-sm mt-6" role="contentinfo">© 1997-2024 Netflix, Inc.</div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  constructor(private readonly _library: FaIconLibrary) {
    this._library.addIcons(faFacebook, faTwitter, faInstagram, faYoutube);
  }
}
