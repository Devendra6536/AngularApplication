import { Component } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';
import { FacultyServericeService } from '../services/faculty-serverice.service';

@Component({
  selector: 'app-cricket-team',
  templateUrl: './cricket-team.component.html',
  styleUrl: './cricket-team.component.css',
})
export class CricketTeamComponent {
  public Students:any;


  public Faculty:any;


  constructor(public students:StudentServiceService,private faculty:FacultyServericeService){
    this.Faculty = faculty.getFacultyDetails();
    this.Students=students.getStudents();
    console.log(this.Students);
  }

}
