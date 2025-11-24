import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { SignInValidator } from '../../validators/signIn.validators';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    FooterComponent,
    MatSnackBarModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  frm: FormGroup;
  showPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private auth: AuthService
  ) {
    this.frm = formBuilder.group(
      {
        email: [''],
        password: [''],
      },
      { validators: [SignInValidator.signInValidator] }
    );
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Kapat', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  giris() {
    const success = this.auth.signIn(
      this.frm.get('email')?.value,
      this.frm.get('password')?.value
    );

    if (success) {
      this.openSnackBar('Başarılı Giriş');
      this.router.navigate(['/private-home']);
    } else {
      this.openSnackBar('Başarısız Giriş');
    }
  }
}
