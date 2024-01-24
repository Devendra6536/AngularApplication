import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }
  public Students=[
    {
      Name:"Gyan mohan",
      Age:22,
      Desg:"Sub Inspector",
      hobies:["Pakadna ","Peetna","Jail bhejna"]
    },
    {
      Name:"Himanshu mohrana",
      Age:25,
      Desg:"Software engineer",
      hobies:["playing","coding","eating"]
    },
    {
      Name:"Sp singh Tiwari",
      Age:23,
      Desg:"Assitant SI",
      hobies:["Running","Arresting","beating"]
    },
    {
      Name:"Sunny Singh",
      Age:21,
      Desg:"Associate engineer",
      hobies:["bug fixing","Development","Sleeping"]
    },
    {
      Name:"Abhi Pandey",
      Age:27,
      Desg:" Electrical engineer",
      hobies:["bug fixing","Development","Sleeping"]
    },
    {
      Name:"S Kant Pathak",
      Age:21,
      Desg:"Software engineer",
      hobies:["bug fixing","Development","Sleeping"]
    }
  ]
  getStudents(){
    return this.Students;
  }

}
