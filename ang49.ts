import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  date=new Date()
}
