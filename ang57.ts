import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class  App {
  title = 'myApp';

  loginForm = new FormGroup({
    email: new FormControl(null, [ Validators.required, Validators.minLength(3)]),
    pass: new FormControl(null, [ Validators.required, Validators.minLength(6)])
  });

  loginUser() {
    console.log(this.loginForm.status);
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);
  };
}
