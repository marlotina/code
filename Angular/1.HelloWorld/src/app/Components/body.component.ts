import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  show: boolean = true;
  public sentence:any={
    message:"Dabudaduabuda",
    author:"Rick"
  }

  charecters:string[]=["Rick","Morty","BirdMan"]
}
