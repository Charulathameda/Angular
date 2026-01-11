import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SortPipe } from './sort-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,SortPipe,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sort-json-app');
  car=[
    {name:'Toyato',type:'UV',price:35000},
    {name:'Honda',type:'sedon',price:28000},
    {name:'Ford',type:'Truck',price:4500},
    {name:'Tesla',type:'Electric',price:5000},
  ];
}
