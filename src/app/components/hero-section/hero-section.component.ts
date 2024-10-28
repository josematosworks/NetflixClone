import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { CustomValidators } from '@shared/validators/custom-validators';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="relative" role="region" aria-labelledby="hero-title">
      <img
        src="../../assets/images/hero.jpg"
        alt="Movie streaming background showing various entertainment content"
        class="w-full h-auto object-cover" />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <h1 id="hero-title" class="text-5xl font-bold">Unlimited movies, TV shows, and more</h1>
        <p class="mt-4 text-lg">Starts at EUR 7.99. Cancel anytime.</p>
        <p class="mt-2">Ready to watch? Enter your email to create or restart your membership.</p>
        <form
          [formGroup]="emailForm"
          (ngSubmit)="onSubmit()"
          class="flex mt-4 flex-col sm:flex-row"
          aria-label="Membership signup form">
          <div class="relative">
            <label for="email" class="sr-only">Email address</label>
            <input
              id="email"
              formControlName="email"
              type="email"
              placeholder="Email address"
              aria-describedby="email-errors"
              [attr.aria-invalid]="emailForm.get('email')?.invalid && emailForm.get('email')?.touched"
              class="px-4 py-3 rounded-l bg-white text-black w-full sm:w-96"
              [ngClass]="{ 'border-red-500': emailForm.get('email')?.invalid && emailForm.get('email')?.touched }" />
            <div
              id="email-errors"
              *ngIf="emailForm.get('email')?.invalid && emailForm.get('email')?.touched"
              class="absolute text-red-500 text-sm mt-1"
              role="alert">
              <span *ngIf="emailForm.get('email')?.errors?.['required']">Email is required</span>
              <span *ngIf="emailForm.get('email')?.errors?.['email']">Please enter a valid email</span>
              <span *ngIf="emailForm.get('email')?.errors?.['forbiddenDomain']">
                Only gmail.com and outlook.com domains are allowed
              </span>
              <span *ngIf="emailForm.get('email')?.errors?.['emailTaken']">This email is already taken</span>
            </div>
          </div>
          <button
            type="submit"
            class="bg-red-600 text-white px-6 py-3 rounded-r font-bold mt-2 sm:mt-0"
            [disabled]="emailForm.invalid || emailForm.pending"
            [attr.aria-busy]="emailForm.pending">
            {{ emailForm.pending ? 'Checking...' : 'Get Started' }}
          </button>
        </form>
      </div>
    </section>
  `
})
export class HeroSectionComponent implements OnInit {
  emailForm!: FormGroup;

  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,
    private readonly _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.emailForm = this._formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email, CustomValidators.allowedDomains(['gmail.com', 'outlook.com'])],
        [CustomValidators.emailNotTaken()]
      ]
    });
  }

  onSubmit(): void {
    if (this.emailForm.valid) {
      console.log('Form submitted with email:', this.emailForm.value.email);
      this._authService.login(); // Simulate login
      this._router.navigate(['/home']);
    }
  }
}
