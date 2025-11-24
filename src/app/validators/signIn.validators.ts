import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class SignInValidator {
  static signInValidator(control: AbstractControl): ValidationErrors | null {
    const form = control as FormGroup;

    const email = form.get('email')?.value;
    const password = form.get('password')?.value;

    if (!email || !password) {
      return { signInErrors: true };
    }
    return null;
  }
}
