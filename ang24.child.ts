import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone:true,
  templateUrl:'.child.html',
  styleUrl: './child.css',
})
export class Child {
  @Output() changeValue=new EventEmitter<number>();
  counter=0;
  changevalue() {
    this.counter++;
    this.changeValue.emit(this.counter);
  }

}
