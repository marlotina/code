import {ListItem} from './list-item'
export class List{
    name:string;
    done:boolean;
    items: ListItem[];

    constructor(name:string){
        this.name = name;
        this.done = false;
    }
}