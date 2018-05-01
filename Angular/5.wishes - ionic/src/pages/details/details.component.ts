import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { List, ListItem } from '../../app/models';
import { ListWishesService } from '../../app/services/listwishes.service';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
    
    idx:number;
    list:List;
    constructor(public navCtrl:NavController,
        public navParams:NavParams,
        public listwishes: ListWishesService,
        public alertCtrl: AlertController) { 
            this.idx = this.navParams.get("index");
            this.list = this.navParams.get("list");
            console.log(this.list);
    }

    ngOnInit(): void { }

    update(item:ListItem){
        item.done = !item.done;

        let allDone = true;
        for(let item of this.list.items){
            if(!item.done){
                allDone = false;
                break;
            }
        }

        this.list.done = allDone;
        this.listwishes.updateDataInLocalStorage();
    }

    cleanItem(){

        let prompt = this.alertCtrl.create({
            title: this.list.name,
            message: "Are you sure?",
            buttons: [
              'Cancel',
              {
                text: 'delete',
                handler: data => {
                    this.listwishes.DeleteList(this.idx);
                    this.navCtrl.pop();
                }
              }
            ]
          });
          prompt.present();
    }
}
