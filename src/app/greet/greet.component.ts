import { Component, Input } from '@angular/core';

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
}
