import { Component, OnInit, Input } from '@angular/core';
import { HackerNewsService } from '../../service/hacker-news-service.service';
import { CacheService } from '../../service/cache-content.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html'
})
export class NewsPageComponent implements OnInit {

  user: any;

  @Input()
  set id(id: string) {
    console.log("$$$$$$$$ getStories NewsPageComponent" );
    this.user = this.cacheService.get(id, this.hackerNewsService.getUser(id));
  };

  constructor(
    private hackerNewsService: HackerNewsService,
    private cacheService: CacheService
  ) { }

  ngOnInit() {

  }
}
