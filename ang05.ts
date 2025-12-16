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
  c:number|undefined;
  beforeA!:number;
  beforeB!:number;
  ngOnit()
  {
    //store original values
    this.beforeA=this.a;
    this.beforeB=this.b;
    //swap
    this.c=this.a;
    this.a=this.b;
    this.b=this.c;
  }
}
