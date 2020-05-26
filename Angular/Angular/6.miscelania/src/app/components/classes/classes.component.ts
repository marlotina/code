import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: "classes.component.html",
  styles: []
})
export class ClassesComponent implements OnInit {

loading:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  executeProcess(){
    this.loading = true;
    setTimeout(()=>this.loading = false, 3000)
  }

}
