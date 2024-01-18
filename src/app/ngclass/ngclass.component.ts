import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.css'
})
export class NgclassComponent {

  constructor(){

  }
  public condition=false;
  public cssClass="mycolor mywriting backG";
  public cssArray=['mycolor','mywriting','backG','myfont'];
  public myclass= new myClass();


}
class myClass {
  mycolor=true;
  mywriting=true;
  backG=true;
}
