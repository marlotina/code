import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'placeHolder'})
export class PlaceHolderPipe implements PipeTransform {
    transform(value: string, defaultValue:string): string {
        return (value) ? value : defaultValue;      
    }
}