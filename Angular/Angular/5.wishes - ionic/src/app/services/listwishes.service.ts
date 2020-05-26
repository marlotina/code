import { Injectable } from '@angular/core';
import { List } from '../models/list';

@Injectable()
export class ListWishesService {
    public lists:List[]=[]

    constructor(){
        console.log("Servicio inicializado");
    }

    updateDataInLocalStorage(){
        localStorage.setItem("data", JSON.stringify(this.lists));
    }

    LoadDataFromLocalStorage(){
        if(localStorage.getItem("data")){
            this.lists = JSON.parse(localStorage.getItem("data"));
        }
    }

    AddList(list:List){
        this.lists.push(list);
        this.updateDataInLocalStorage();
    }

    DeleteList(index:number){
        this.lists.splice(index, 1);
        this.updateDataInLocalStorage();
    }
}