import { Component, OnInit } from '@angular/core';
import { Calc } from 'calc-js';
import { CalculatorServiceService } from 'src/app/services/calculator-service.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  constructor (private calculatorService: CalculatorServiceService){}
  
  ngOnInit(): void {
    //Inicio con los valores parciales guardados
    let resultPartial = this.calculatorService.getLocalResult();
    if(resultPartial != null)
      this.mainText = resultPartial;
    console.log("Resultado guardado: " + resultPartial);
    
  }

  subText = '';
  mainText = '';
  operand1: number = 0;
  operand2: number = 0;
  operator = '';
  calculationString = '';
  answered = false;
  operatorSet = false;

  pressKey(key: string) {

    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      const lastKey = this.mainText[this.mainText.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+') {
        this.operatorSet = true;
      }
      this.operand1 = parseFloat(this.mainText);
      this.operator = key;
      this.operatorSet = true;
    }
    if (this.mainText.length === 10) {
      return;
    }
    this.mainText += key;
  }

  allClear() {
    //Reseteo todos los atributos, incluso los almacenados en memoria local
    this.mainText = '';
    this.subText = '';
    this.operatorSet = false;
    this.calculatorService.deleteLocalResult();
  }

  getAnswer() {
    this.calculationString = this.mainText;
    this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);
    
    if (this.operator === '/') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 / this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = this.mainText.substr(0, 9);
      }
      this.saveLocal(this.mainText);
    } else if (this.operator === 'x') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 * this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = 'ERROR';
        this.subText = 'Range Exceeded';
      }
      this.saveLocal(this.mainText);
    } else if (this.operator === '-') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 - this.operand2).toString();
      this.subText = this.calculationString;
      this.saveLocal(this.mainText);
    } else if (this.operator === '+') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 + this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = 'ERROR';
        this.subText = 'Range Exceeded';
      }
      this.saveLocal(this.mainText);
    } else {
      this.subText = 'ERROR: Invalid Operation';
    }
    this.answered = true;
  }

  //Guardo el resutado parcial en memoria local, usando el servicio que me provee CalculatorService 
  saveLocal(result: string){
    this.calculatorService.saveLocalResult(result);
  }

}
