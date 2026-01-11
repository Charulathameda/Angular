import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngApp');
  login={ name:" ",age:0,pass:" ",email:" "};
}
