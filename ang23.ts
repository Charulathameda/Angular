import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Child} from './child/child';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,FormsModule,CommonModule,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngApp');
  x=0;
  showVal(count:number)
  {
    console.log(count);
    this.x=count;
  }
}
