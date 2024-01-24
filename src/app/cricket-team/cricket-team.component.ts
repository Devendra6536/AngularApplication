import { Component } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: 'app-cricket-team',
  templateUrl: './cricket-team.component.html',
  styleUrl: './cricket-team.component.css',
  providers:[StudentServiceService]
})
export class CricketTeamComponent {
  public Students:any;


  constructor(public students:StudentServiceService){
    this.Students=students.getStudents();
    console.log(this.Students);
  }

}
