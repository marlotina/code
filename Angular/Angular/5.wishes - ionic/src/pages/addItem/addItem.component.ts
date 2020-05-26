import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { List, ListItem } from '../../app/models/index';
import { ListWishesService } from '../../app/services/listwishes.service';

@Component({
    selector: 'app-AddItem',
    templateUrl: './addItem.component.html'
})
export class AddItemComponent implements OnInit {
    nameList:string ="";
    nameItem:string = "";

    items:ListItem[] =[];
    


    constructor(public _listService:ListWishesService,
        public _alertController:AlertController,
        public _navCtrl:NavController) {
            this._listService.LoadDataFromLocalStorage();
         }

    ngOnInit(): void { }

    addMethod(){
        if(this.nameItem.length == 0){
            return;
        }
        let item = new ListItem();
        item.name = this.nameItem;
        this.items.push(item);
        this.nameItem = '';
    }

    removeItem(index:number){
        this.items.splice(index,1)
    }

    saveList(){
        if(this.nameList.length == 0){
            let alert = this._alertController.create({
                title: 'Name list',
                subTitle: 'Name list is mandatory',
                buttons: ['OK']
              });
              alert.present();
        }

        let list = new List(this.nameList);
        list.items = this.items;
        
        this._listService.AddList(list);
        this._navCtrl.pop();
    }
}
