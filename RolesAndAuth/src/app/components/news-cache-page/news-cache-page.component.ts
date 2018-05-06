import { Component, OnInit } from '@angular/core';
import { CacheService } from '../../service/cache-content.service';
import { HackerNewsService } from '../../service/hacker-news-service.service';

@Component({
  selector: 'app-news-cache-page',
  templateUrl: './news-cache-page.component.html'
})
export class NewsCachePageComponent implements OnInit {

  user: any;
  news: Array<any> = [];

  constructor(private cacheService:CacheService,
    private hackerNewsService: HackerNewsService) { }

  ngOnInit() {
  }


  getStories(pageNumber){
    let newsResponse = this.cacheService.get(pageNumber, this.hackerNewsService.getLatestStories(pageNumber));
    
    this.news = this.news.concat(newsResponse);

    console.log(this.news);
  }

  getUser(id){
    this.user = this.cacheService.get(id, this.hackerNewsService.getUser(id));
  }


}
