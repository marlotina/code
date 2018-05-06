import {Component, NgModule} from '@angular/core'
import { HackerNewsService } from './service/hacker-news-service.service';

import {BrowserModule} from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Cache Service with RxJS';

  currentPage: number = 1;

  news: Array<any> = [];

  scrollCallback;

  constructor(private hackerNewsSerivce: HackerNewsService) {
    this.scrollCallback = this.getStories.bind(this);
   }

  getStories() {
    return this.hackerNewsSerivce.getLatestStories(this.currentPage).do(this.processData);
  }

  private processData = (news) => {
    this.currentPage++;
    this.news = this.news.concat(news);
  }
}
