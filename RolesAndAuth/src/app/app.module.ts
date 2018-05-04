import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { APP_ROUTING } from './app.routes';
import { AuthGuard } from './service/auth-guard.service';
import { AuthenticationService } from './service/authentication.service';
import { NewPage2Component } from './components/page2/new-page2/new-page2.component';
import { EditPage2Component } from './components/page2/edit-page2/edit-page2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    NewPage2Component,
    EditPage2Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
