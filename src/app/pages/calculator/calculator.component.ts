import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  operator1: number | undefined;
  operator2: number | undefined;
  acumulator: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  num(num: number) {
    
    this.acumulator = num;
    this.operator1 = this.acumulator;
    console.log(this.acumulator);
  }

}
