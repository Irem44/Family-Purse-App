import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, RouterLink, FooterComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  frm: FormGroup;
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.frm = formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  giris() {
    this.router.navigate(['/private-home']);
  }
}
