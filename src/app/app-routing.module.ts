import { NgModule } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router'
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path:'', component: HomeComponent},
    { path: 'appointment', component: AppointmentCalendarComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
