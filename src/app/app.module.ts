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
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthService } from './auth/auth.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AppointmentCalendarComponent,
    HomeComponent,
    MenuComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    NgxMaterialTimepickerModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'stylistReservationApp'),// imports firebase/app needed for everything
    AngularFirestoreModule, // only needed for database
    AngularFireStorageModule, // only needed for storage
    AngularFireAuthModule, //only needed for auth features 

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
