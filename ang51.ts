import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PercentPipe,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngApp');
}
