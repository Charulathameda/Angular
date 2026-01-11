import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name:String="state bank";
}
