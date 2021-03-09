import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-can-active-auth',
  templateUrl: './can-active-auth.component.html',
  styleUrls: ['./can-active-auth.component.css']
})

@Injectable()
export class CanActiveAuthComponent implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) { }

  canActivate() {
    if(!this.authService.isLogged()){
      alert('Debes ingresar codigo correcto!!!');
      this.router.navigateByUrl('/home');
      return false;
    }
    return true;
  }

}
