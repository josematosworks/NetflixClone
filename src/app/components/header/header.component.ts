import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  template: `
    <header class="flex justify-between items-center p-4">
      <img
        src="../../../../assets/images/netflix-logo.png"
        alt="Netflix Logo"
        class="h-10 mr-8 cursor-pointer"
        [routerLink]="['/']" />
      <div class="w-full flex justify-between items-center">
        <nav class="space-x-6">
          <ng-container *ngIf="isAuthenticated">
            <a [routerLink]="['/home']" class="hover:underline">Home</a>
            <a [routerLink]="['/trending']" class="hover:underline">Trending</a>
            <a [routerLink]="['/new-and-popular']" class="hover:underline">New & Popular</a>
            <a [routerLink]="['/my-list']" class="hover:underline">My List</a>
          </ng-container>
        </nav>
        <div class="flex space-x-4 items-center text-xl">
          <fa-icon [icon]="['fas', 'search']"></fa-icon>
          <fa-icon *ngIf="isAuthenticated" [icon]="['fas', 'bell']"></fa-icon>
          <img
            *ngIf="isAuthenticated"
            [src]="'https://api.dicebear.com/7.x/avataaars/svg?seed=' + randomSeed"
            alt="User Avatar"
            class="rounded-full w-8 h-8" />
          <button *ngIf="!isAuthenticated" (click)="login()" class="bg-red-600 text-white px-4 py-2 rounded">
            Login
          </button>
          <button *ngIf="isAuthenticated" (click)="logout()" class="bg-red-600 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  randomSeed = Math.random();
  isAuthenticated = false;

  constructor(
    private readonly _library: FaIconLibrary,
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {
    this._library.addIcons(faSearch, faBell);
  }

  ngOnInit(): void {
    this._authService.authState().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  login(): void {
    this._authService.login();
    this._router.navigate(['/home']);
  }

  logout(): void {
    this._authService.logout();
    this._router.navigate(['/landing']);
  }
}
