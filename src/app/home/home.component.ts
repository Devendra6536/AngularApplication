import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  //selector: 'app-home',
  // selector:'.app-home',
  selector:'[app-home]',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(){

  }
  public name="";
  public age=0;
  public title="Cavisson system INc";
  public className="btn";
  public myID="Ibox";
  public isDisable=true;
  public class="mywriting";
  public condition=true;
  public Name="SI Devendra kumar ";
  // greet(a:string, b:number){
  //   this.name=a;
  //   this.age=b;

  // }
  greet(event:any){
    console.log(event);
  }

  myFunc(){
    return "myClass";
  }
  changeData(){
    this.Name="SI Dev Kumar";
  }


  public fruits  = ["Apple","Mango","Grapes","Banana"]
  myobject={
      Name:"Devendra kumar",
      Age:21,
      Desg:"Police inspector"
  }

  public msg:string="";
  public date = new Date();

}






































































