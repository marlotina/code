import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../../service/hacker-news-service.service';

@Component({
  selector: 'app-cache-page',
  templateUrl: './cache-page.component.html'
})
export class CachePageComponent  {

  currentPage: number = 1;

  news: Array<any> = [];

  scrollCallback;

  constructor(private hackerNewsSerivce: HackerNewsService) {
    this.scrollCallback = this.getStories.bind(this);
   }

  getStories() {
    console.log("¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿ getStories AppComponent" );
    return this.hackerNewsSerivce.getLatestStories(this.currentPage).do(this.processData);
  }

  private processData = (news) => {
    this.currentPage++;
    this.news = this.news.concat(news);
  }

}
