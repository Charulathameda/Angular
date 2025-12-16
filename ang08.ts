import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   ecode:String="E 101";
   eno:number=101;
   ename:string="anil";
   esal:number=4555.85;
   egrade:string='a';
   ews:boolean=true;
}
