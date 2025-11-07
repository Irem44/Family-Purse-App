import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-header',
  imports: [],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss',
})
export class PrivateHeaderComponent {
  constructor(private router: Router) {}
  report() {
    this.router.navigate(['/report']);
  }
}
