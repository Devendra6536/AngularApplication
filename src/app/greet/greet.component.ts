import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrl: './greet.component.css'
})
export class GreetComponent {

  // @Input() myName:string='';
  @Input('myName') Name:string='';
  @Input() fruits:string[]=[];
  @Input() myData:any={};




  //first we make the event in the child ts file
  @Output() public childEvent= new EventEmitter();

  fireEvent(){
    this.childEvent.emit("Devendra kumar pal garhikhanpur buduan uttar 202325");
  }
}
