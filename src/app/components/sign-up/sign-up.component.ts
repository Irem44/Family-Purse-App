import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { AuthService, User } from '../../services/auth.service';
import { SignUpValidator } from '../../validators/signUp.validators';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, FooterComponent, MatSnackBarModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  frm: FormGroup;
  showPassword: boolean = false;
  message: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.frm = formBuilder.group(
      {
        name: [''],
        surname: [''],
        email: ['', [Validators.email]],
        password: [''],
      },
      { validators: [SignUpValidator.signupValidator] }
    );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Kapat', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  kayit() {
    const success = this.authService.signUp(this.frm.value);

    if (success) {
      this.openSnackBar('Kayıt Başarılı');
      this.router.navigate(['/private-home']);
    } else {
      this.openSnackBar('Kayıt başarısız');
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
