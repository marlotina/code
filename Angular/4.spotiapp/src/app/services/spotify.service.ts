import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {ItemSpoti} from '../model/itemSpoti';
import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { of } from 'rxjs/observable/of';
@Injectable()
export class SpotifyService {

  atistList: ItemSpoti[]=[];
  urlSpotify:string='https://api.spotify.com/v1/'
  token:string= 'BQBdtsBk-FCexVuFmOEVKhFENw9Stn-TqIJio_po4aRmV9O4RSrYT5cEmIO5cv3wl0TrBZTzfJOk5hguqWE';

  
  constructor(public _http:HttpClient) {
    console.log('start spotify service');
   }


   getArtists(searchParam:string):Observable<ItemSpoti[]> {
    let url= `${this.urlSpotify}search?query=${searchParam}&type=artist&offset=0&limit=20`;
    let headers = this.getHeaders();

    return this._http.get(url,{headers})
        .map((response: any) =>{
          this.atistList = this.ChangeItemToModel(response.artists.items);
          return this.atistList;
        });
  }

  getArtist(id:string) : Observable<ItemSpoti>{
    let url= `${this.urlSpotify}artists/${id}`;

    let headers = this.getHeaders();
    return this._http.get(url,{headers})
    .map((response: any) =>{
      return {name: response.name, popularity: response.popularity, listen:'', photo:response.images[1].url, id:response.id};
    });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  };

  private log(message: string) {
    console.info(message);
  }

  ChangeItemToModel(list:any):ItemSpoti[]{
    let itemList: ItemSpoti[] = [];
    let noImage = 'assets/img/noimage.png';
    

    for (let entry of list) {
      let iamge ='';
      if(!entry.images){
        iamge = noImage;
      }  else{
        iamge = entry.length > 1 ? entry[1].url : noImage;
      }
      itemList.push({name: entry.name, popularity: entry.popularity, listen:'', photo:iamge, id:entry.id});
    }
    return itemList;
  }

  getTop(id:string){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=es`;
    let headers = this.getHeaders();

    return this._http.get(url,{headers});
  }

  private getHeaders():HttpHeaders{
    let headers = new HttpHeaders({
      'authorization':'Bearer ' + this.token
    });

    return headers;
  }

}



  





















 

