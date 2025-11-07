import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, FooterComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  frm: FormGroup;
  showPassword: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.frm = formBuilder.group({
      name: [''],
      surname: [''],
      email: [''],
      password: [''],
    });
  }

  kayit() {
    this.router.navigate(['/private-home']);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
