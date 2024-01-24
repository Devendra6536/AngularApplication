import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Agent } from 'http';

@Component({
  selector: 'app-greetingbox',
  templateUrl: './greetingbox.component.html',
  styleUrl: './greetingbox.component.css'
})
export class GreetingboxComponent {


  @Input() public myData:string="";

  @Output() public event_for_sending_data_to_parent_component = new EventEmitter();
  GenerateToken(){
    let choice = confirm("Do you want to generae the token Please confrim it")
    if(choice==true) this.event_for_sending_data_to_parent_component.emit("This is the example of sending data from child to parent");
    else alert("Error! You did not choose any options");
    console.log("Token is generated now you can use this token for sending the data to the parent");

  }

  public myData1={
    Name:"Devendra",
    Age:20,
    Desg:"Sub inspector"
  }
}
