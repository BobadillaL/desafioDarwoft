import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  password: string = "";

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  //Valido que se ingreso correctamente el codigo secreto
  validate(){
    var result = this.authService.login(this.password);
    if(result){
      this.router.navigateByUrl('/calculator');
    }else{
      alert('Codigo invalido!!!');
    }

  }
}
