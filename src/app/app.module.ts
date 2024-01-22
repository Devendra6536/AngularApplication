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


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    NgclassComponent,
    StylebindingComponent,
    EmployeeComponent,
    CounterComponent,
    GreetComponent
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
