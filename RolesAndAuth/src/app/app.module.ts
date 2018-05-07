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
import { HomePageComponent } from './components/page2/home-page/home-page.component';
import { HackerNewsService } from './service/hacker-news-service.service';
import { CacheService } from './service/cache-content.service';
import { NewsPageComponent } from './components/page-hawker/news-page.component';
import { InfiniteScrollerDirective } from './InfiniteScroller.directive';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NewsCachePageComponent } from './components/news-cache-page/news-cache-page.component';
import { CacheServiceService } from './service/cache-service.service';
import { HackerNewsServiceOfflineService } from './service/hacker-news-service-offline.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    NewPage2Component,
    EditPage2Component,
    HomePageComponent,
    NewsPageComponent,
    InfiniteScrollerDirective,
    NewsCachePageComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    HackerNewsService,
    CacheService,
    CacheServiceService,
    HackerNewsServiceOfflineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
