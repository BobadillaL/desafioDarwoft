import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Injectable()
export class CanActiveAuthComponent implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) { }

  canActivate() {
    if(!this.authService.isLogged()){
      alert('Debes ingresar un codigo correcto!!!');
      this.router.navigateByUrl('/home');
      return false;
    }
    return true;
  }

}
