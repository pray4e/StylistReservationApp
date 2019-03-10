import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { LoginComponent } from './login/login.component';
 
export class AuthService {
    private user: User; 

    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
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