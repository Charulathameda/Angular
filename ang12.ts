import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{Greeting}from'./greeting/greeting';

@Component({
  selector: 'app-root',
  imports: [Greeting,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngApp');
}
