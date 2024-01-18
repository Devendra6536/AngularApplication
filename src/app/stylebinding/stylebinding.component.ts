import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrl: './stylebinding.component.css'
})
export class StylebindingComponent {

  public myclass=
  {
    'color':'orange',
    'background-color':'black',
    'font-family':'cooper',
    'fontSize':'60px'
  };
  public condition=true;
}
