import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Login } from './login';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, FormsModule,RouterOutlet,Login],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'ngApp';
  model = new Login('', '', '', '', false);

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.model);
  }
}
