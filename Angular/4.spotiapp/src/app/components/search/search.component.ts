import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  searchParam:string='';

  constructor(public _spotifyService: SpotifyService) { 
    
  }

  ngOnInit() {
  }
  
  searchArtist(){
    if(this.searchParam.length == 0){
      return;
    }
    
    this._spotifyService.getArtists(this.searchParam).subscribe();
  }

}
