import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export class CustomValidators {
  static allowedDomains(allowedDomains: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const email = control.value.toLowerCase();
      const domain = email.substring(email.lastIndexOf('@') + 1);
      if (allowedDomains.indexOf(domain) === -1) {
        return { forbiddenDomain: { value: control.value, allowedDomains } };
      }
      return null;
    };
  }

  static emailNotTaken(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value.toLowerCase();
      // Simulate API call
      return of(email).pipe(
        delay(1000),
        map(email => {
          // Simulate check (consider every email ending with 'taken@' as already taken)
          const isTaken = email.endsWith('taken@');
          return isTaken ? { emailTaken: true } : null;
        })
      );
    };
  }
}
