import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component'
import { AppRoutingModule } from './app-routing.module';
import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AppointmentCalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    NgxMaterialTimepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
