import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimulasiComponent } from './pages/simulasi/simulasi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimulasiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'web';
}
