import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  constructor(
    public name: string,
    public password: string,
    public gender: string,
    public city: string,
    public terms: boolean
  ) {}
}
