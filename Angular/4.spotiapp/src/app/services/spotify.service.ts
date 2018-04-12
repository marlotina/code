import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  atistList: any[]=[];
  urlSpotify:string='https://api.spotify.com/v1/'
  token:string= 'BQDxLzXyOoi7VtZjX6x862-4ptp2FKP_u9lYrZyxhEgWRKyJlVp8n--zhXJ7LyvpWQ__KECmGFgADSurcCM';
  constructor(public _http:HttpClient) {
    console.log('start spotify service');
   }


   getArtists(searchParam:string){
    let url= `${this.urlSpotify}search?query=${searchParam}&type=artist&offset=0&limit=20`;
    let headers = this.getHeaders();

    return this._http.get(url,{headers})
                      .map((response: any) =>{
                        this.atistList =response.artists.items;
                        return this.atistList;
                      });

    //this._http.get(url,{headers:headers}).subscribe(response=>{
    //this._http.get(url,{headers}).subscribe(response=>{
    //  console.log(response);
    //})
  }

  getTop(id:string){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=es`;
    let headers = this.getHeaders();

    return this._http.get(url,{headers});
  }

  getArtist(id:string){
    let url= `${this.urlSpotify}artists/${id}`;

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
