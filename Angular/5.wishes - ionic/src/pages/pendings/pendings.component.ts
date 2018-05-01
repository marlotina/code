import { Component, OnInit } from '@angular/core';
import { ListWishesService } from '../../app/services/listwishes.service';
import {NavController} from 'ionic-angular'
import {AddItemComponent } from '../addItem/addItem.component';
import { DetailsComponent } from '../details/details.component';


@Component({
    selector: 'app-pendings',
    templateUrl: 'pendings.component.html',
})
export class PendingsComponent implements OnInit {
    constructor(public _listWhishesServices:ListWishesService,
        private _navCtrl:NavController) {
     }

    ngOnInit(): void { }

    goToAddItem(){
        this._navCtrl.push(AddItemComponent);
    }

    seeDetails(list, index){
        this._navCtrl.push(DetailsComponent,{ list, index});
    }
}
