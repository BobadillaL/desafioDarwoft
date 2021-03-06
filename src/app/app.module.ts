import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { CanActiveAuthComponent } from './guards/can-active-auth/can-active-auth.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [    
    CanActiveAuthComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
