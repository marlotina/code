import { BrowserModule } from '@angular/platform-browser';
//import { LOCALE_ID, NgModule } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from '../../src/app/app.component';
 
import localeEs from '@angular/common/locales/es';

import { LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';

import { CustomPipe } from '../../src/app/pipes/customPipe.pipe';
import { DomSecurePipe } from './pipes/dom-secure.pipe';

registerLocaleData(localeEs);
 
@NgModule({
 imports: [ 
   BrowserModule,
   FormsModule,
   HttpModule
  ],
 declarations: [ 
   AppComponent,
   CustomPipe,
   DomSecurePipe
   ],
 providers: [ 
   { 
     provide: LOCALE_ID, 
     useValue: 'es'//set pipes culture 
    } ],
 bootstrap: [ 
   AppComponent ]
})
export class AppModule { }