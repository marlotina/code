

import { Component, OnInit, Input } from '@angular/core';
import { CacheService } from '../service/cache-content.service';
import { HackerNewsService } from '../service/hacker-news-service.service';

@Component({
  selector: 'app-news-author',
  templateUrl: './news-author.component.html'
})
export class NewsAuthorComponent implements OnInit {

  user: any;

  @Input()
  set id(id: string) {
    this.user = this.cacheService.get(id, this.hackerNewsService.getUser(id));
  };

  constructor(
    private hackerNewsService: HackerNewsService,
    private cacheService: CacheService
  ) { }

  ngOnInit() {

  }

}