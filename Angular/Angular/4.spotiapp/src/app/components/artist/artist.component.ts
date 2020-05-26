import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import {ItemSpoti} from '../../model/itemSpoti';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist:any = {};
  topTraks:any[]=[];
  constructor(private activatedRoute: ActivatedRoute,
                public _spotifyService: SpotifyService) {

   }

  ngOnInit() {
    this.activatedRoute.params
      .map(paramas=> paramas['id'])  
      .subscribe(id =>{
        this._spotifyService.getArtist(id).subscribe(artist=>{
          this.artist=artist;
          console.log(this.artist);
        });
        
        this._spotifyService.getTop(id)
        .map((response:any) => response.tracks)
        .subscribe(tracks=>{
          this.topTraks=tracks;
          console.log(this.topTraks);

        })
      });
  }

}
