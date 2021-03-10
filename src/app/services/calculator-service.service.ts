import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {

  constructor() { }


//Guardar resultado en el LocalStorage
saveLocalResult(result: string): void {
  console.log(result);
  
  localStorage.setItem('result', result);

}


//Obtener resultado parcial del LocalStorage
getLocalResult(): string {
  let result = localStorage.getItem('result');
  if(result!= null){
    return result;  
  }else{
    return "";
  }
}

//Borro el resultado parcial del LocalStorage
deleteLocalResult() {
  localStorage.removeItem('result');
}


}
