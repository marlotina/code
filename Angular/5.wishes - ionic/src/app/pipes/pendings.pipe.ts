import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models';

@Pipe({
    name: 'pendings',
    pure: false
})
export class PendingsPipe implements PipeTransform {
    transform(lists: List[], status:boolean=false): List[] {
        
        let filterList:List[] = [];

        for(let list of lists){
            if(list.done ==status){
                filterList.push(list);
            }
        }
        return filterList;      
    }
}