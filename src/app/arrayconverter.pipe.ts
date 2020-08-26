import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayconverter'
})
export class ArrayconverterPipe implements PipeTransform {

  transform(value, args){
    return Array.from(value);
  }

}
