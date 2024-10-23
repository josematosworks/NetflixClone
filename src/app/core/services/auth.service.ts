import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  login(): void {
    this.isLoggedIn.next(true);
  }

  logout(): void {
    this.isLoggedIn.next(false);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn.value;
  }

  authState(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }
}
