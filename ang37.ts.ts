import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,KeyValuePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngApp');
  cars={name:"swift",power:90,torque:155};
}
