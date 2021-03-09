import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  logged: boolean = false;
  code: string = "12345678";
  
  constructor() { }

  
  login(password: string){
    this.logged = (this.code == password);
    return this.logged;
  }

  isLogged(){
    return this.logged;
  }


}
