import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,LowerCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name:String="name";
}
