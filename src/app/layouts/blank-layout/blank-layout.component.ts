import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="min-h-screen bg-black text-white font-roboto">
      <router-outlet></router-outlet>
    </div>
  `
})
export class BlankLayoutComponent {}
