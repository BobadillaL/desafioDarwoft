import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  logged: boolean = false;
  code: string = "12345678";
  result: string = '';

  constructor() { }

  
  login(password: string){
    this.logged = (this.code == password);
    return this.logged;
  }

  isLogged(){
    return this.logged;
  }

}
