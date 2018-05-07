import { Component, OnInit, NgModule } from '@angular/core';
import { CacheService } from '../../service/cache-content.service';
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { HackerNewsServiceOfflineService } from '../../service/hacker-news-service-offline.service';

@Component({
  selector: 'app-news-cache-page',
  templateUrl: './news-cache-page.component.html'
})
export class NewsCachePageComponent implements OnInit {

  title = 'Angular Cache Service with RxJS';

  users: Observable<any>;
  loadMore$ = new Subject<string>();


  constructor(
    private hackerNewsSerivce: HackerNewsServiceOfflineService,
    private cacheService: CacheService
  ) {
  }

  ngOnInit() {

    this.users = this.loadMore$
      .switchMap((key) => this.cacheService.get(key, this.hackerNewsSerivce.getUser(key)))
      .scan((acc, curr) => {
        acc.push(curr)
        return acc
      }, []);
  }

  getValue(key: string) {
    this.loadMore$.next(key);
  }

  setValue(key: string, value: string) {
    this.cacheService.set(key, {
      "DataValue": value,
      "Id": key
    })
  }

}
