import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

public Name="";
getName(username:string){
  this.Name=username;
}
getName1(username:string){
  console.log(username);
}

getInput(username:any){
  console.log(username);
  this.Name=username;
}

getHeading(value:string){
  console.log(value);
  alert("Hello");
}

public UserName="";
generateName(firstname:string, lastname:string){
  console.log(firstname +" "+ lastname);
  this.UserName=firstname+lastname;
}
}
