import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  a:number=5;
  b:number=3;
  add=0;
  sub=0;
  mul=0;
  div=0;
  mod=0;
  exp=0;
  ngOnit()
  {
    this.add=this.a+this.b;
    this.sub=this.a-this.b;
    this.mul=this.a*this.b;
    this.div=this.a/this.b;this.mod=this.a%this.b;
    this.exp=this.a**this.b;
  }
}
