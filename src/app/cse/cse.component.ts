import { Component } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: '.app-cse',
  templateUrl: './cse.component.html',
  styleUrl: './cse.component.css',
  providers:[StudentServiceService]
})
export class CSEComponent {


  public Students:any;
  constructor(private std:StudentServiceService){
    this.Students=std.getStudents();
    console.log(this.Students);
  }
}
