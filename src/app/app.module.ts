import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EmployeeComponent } from './employee/employee.component';
import { CounterComponent } from './counter/counter.component';
import { GreetComponent } from './greet/greet.component';
import { GreetingboxComponent } from './greetingbox/greetingbox.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { CSEComponent } from './cse/cse.component';
import { CricketTeamComponent } from './cricket-team/cricket-team.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    NgclassComponent,
    StylebindingComponent,
    EmployeeComponent,
    CounterComponent,
    GreetComponent,
    GreetingboxComponent,
    LandingpageComponent,
    StudentDataComponent,
    CSEComponent,
    CricketTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
