import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <hr>
    <app-css></app-css>
    <hr>
    <app-classes></app-classes>

    <hr>
    <p [appHighlighted]="'green'">
      hello word  
    </p>
    <hr>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit");
  }
  
  ngOnChanges() {
    console.log("OnChanges");
  } 
  
  ngDoCheck() {
    console.log("DoCheck");
  }
  
  ngAfterContentInit() {
    console.log("AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AfterViewInit");
  }
  
  ngAfterViewChecked() {
    console.log("AfterViewChecked");
  } 
  
  ngOnDestroy() {
    console.log("OnDestroy");
  }
}
