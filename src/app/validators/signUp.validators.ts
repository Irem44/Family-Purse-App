import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class SignUpValidator {
  static signupValidator(control: AbstractControl): ValidationErrors | null {
    const form = control as FormGroup;

    const name = form.get('name')?.value;
    const surname = form.get('surname')?.value;
    const email = form.get('email')?.value;
    const password = form.get('password')?.value;

    if (!name || !surname || !email || !password) {
      return { signUpErros: true };
    }

    return null;
  }
}
