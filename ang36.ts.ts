import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngApp');
  cars=[
    {"name":"swift","type":"hatchback","price":810000},
    {"name":"dzire","type":"hatchback","price":880000},
    {"name":"ciaz","type":"sedan","price":1000000},
  ];
}
