import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Child} from './child/child';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title=signal('ngApp')
  x=0;
  showVal (count:number){
    this.x=count;
  }
}
