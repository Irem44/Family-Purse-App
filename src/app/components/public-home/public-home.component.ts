import { Component } from '@angular/core';
import { PublicHeaderComponent } from '../public-header/public-header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-home',
  imports: [PublicHeaderComponent, FooterComponent],
  templateUrl: './public-home.component.html',
  styleUrl: './public-home.component.scss',
})
export class PublicHomeComponent {}
