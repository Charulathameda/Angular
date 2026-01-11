import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomPipe } from './custom-pipe';

@Component({
  selector: 'app-root',
  imports: [CustomPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngApp');
}
