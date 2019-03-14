import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { LoginComponent } from './login/login.component';
import { AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';



@Injectable()
export class AuthService {
    private user: User; 

    constructor(private router: Router, private afAuth: AngularFireAuth){}


    registerUser(authData: AuthData){
        this.afAuth.auth.createUserWithEmailAndPassword(
            authData.email, 
            authData.password
        ).then(result =>{
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        });
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
    }

    logout(){
        this.user=null;
    }

    getuser(){
        return{...this.user};
    }

    isAuth(){
        return this.user != null;
    }



}