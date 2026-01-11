import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,DecimalPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title="demo";
}
