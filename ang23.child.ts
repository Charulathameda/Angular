import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Output() changeValue=new EventEmitter<number>();
  counter=0;
  changedValue(){
    this.counter=this.counter+1;
    this.changeValue.emit(this.counter);
  }

}
