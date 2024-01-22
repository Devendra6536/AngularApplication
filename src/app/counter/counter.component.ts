import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent  {

  imageD="https://m.media-amazon.com/images/I/81INaQs++FL._SY466_.jpg";
  public count:number=0;
  counter(){
    this.count++;
  }
  decreaseCounter(){
    if(this.count<0){
      alert("No of item can not be less than one");
    }
    this.count--;
  }

  public totalRS:number=0;
  placeOrder(noOfItem:number){

    confirm("Do you want to purchase "+ noOfItem);
    this.totalRS=noOfItem*500;

  }

public Name="";
public length=true;
public condition=true;

public passwordStatus="";
public color="";
 getNameLength(){

  if(this.Name.length==0){
    this.length=true;
    console.log(this.Name.length);
  }else{
    this.length=false;
  }
  if(this.Name.length<4){
    this.passwordStatus="";
  }else if(this.Name.length >4 && this.Name.length<=10){
    this.passwordStatus="****your password is weak****";
    this.color="green";
    this.length=false;
  }
  else if(this.Name.length>10 && this.Name.length<20){
    this.passwordStatus="****Your password is strong****";
    this.color="red";
  }
  else if(this.Name.length>20){
    this.passwordStatus="****Your password is extra strong****";
    this.color="red";
  }
  console.log(this.Name);
 }



    public variable1=0;


    public pizza_choice="sn cd sd  mn sdm ";





    public fruits=["Banana","Mango","Apple","Papaya","Guava","Orange"];





    public header=["Name","Designation","Age"]


    public friendsList=[
      {
        Name:"Himanshu mohrana",
        Age:25,
        Desg:"Software engineer"
      },
      {
        Name:"Sp singh Tiwari",
        Age:23,
        Desg:"Assitant SI"
      },
      {
        Name:"Sunny Singh",
        Age:21,
        Desg:"Associate engineer"
      },
      {
        Name:"Gyan mohan",
        Age:22,
        Desg:"Software engineer"
      },
      {
        Name:"Abhi Pandey",
        Age:27,
        Desg:" Electrical engineer"
      },
      {
        Name:"S Kant Pathak",
        Age:21,
        Desg:"Software engineer"
      }
    ]

}
