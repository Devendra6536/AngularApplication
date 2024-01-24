import { Component } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';
import { FacultyServericeService } from '../services/faculty-serverice.service';

@Component({
  selector: '.app-cse',
  templateUrl: './cse.component.html',
  styleUrl: './cse.component.css',
  //providers:[StudentServiceService] // this is component level Dependency injection
})
export class CSEComponent {


  public Students:any;
  constructor(private std:StudentServiceService,private faculty:FacultyServericeService){
    this.Students=std.getStudents();
    console.log(this.Students);
    console.log(faculty.getFacultyDetails());
  }
}
