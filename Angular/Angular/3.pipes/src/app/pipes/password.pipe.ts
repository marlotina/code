import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class Password implements PipeTransform {

  transform(value: string, activate:string): string {
    
    if(activate){
      let result = "";
      for(let i = 0; i < value.length;i++){
          result += '*';
      }

      return result;
    }
    return value;
  }
}
