
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,           // If using standalone components
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']    // must be styleUrls (array)
})
export class App {
  protected readonly title = signal('ngApp');

  name: string = '';

  updatename(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }
}