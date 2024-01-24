import { Component } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrl: './registar.component.css'
})
export class RegistarComponent {

  public Students:any;


  constructor(private students:StudentServiceService){
    this.Students=students.getStudents();
    console.log(this.Students);
  }

}
