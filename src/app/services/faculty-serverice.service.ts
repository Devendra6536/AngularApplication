import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyServericeService {

  constructor() { }


  public faculty = {
    Name:"SR NAnda",
    Dept:"Electrical engineering",
    Salary:125698,
    Address:"Budaun uttar pradesh india"
  }



  getFacultyDetails(){

    return this.faculty;
  }

}
