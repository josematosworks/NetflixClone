import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="flex flex-col min-h-screen bg-black text-white font-roboto" role="application">
      <app-header role="banner"></app-header>
      <main class="flex-grow" role="main" tabindex="-1">
        <router-outlet></router-outlet>
      </main>
      <app-footer role="contentinfo"></app-footer>
    </div>
  `
})
export class MainLayoutComponent {}
