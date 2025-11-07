import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PublicHomeComponent } from './components/public-home/public-home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'aile-cuzdani';
}
