import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']   // ✔ Must be styleUrls (array)
})
export class AppComponent {   // ✔ Use AppComponent (best practice)
  title = signal('ngApp');    // ✔ No need for protected here
  cars = ["swift", "baleno", "fronx"]; // ✔ Correct spelling: baleno
}