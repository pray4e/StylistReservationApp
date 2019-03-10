
import { NgModule } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router'
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component'
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'payment', component: PaymentComponent },
    { path: 'appointment', component: AppointmentCalendarComponent, canActivate:[AuthGuard] },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'menu', component: MenuComponent },
]

@NgModule({
    providers:[AuthGuard],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
