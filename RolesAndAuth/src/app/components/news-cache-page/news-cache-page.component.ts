import { Component, OnInit } from '@angular/core';
import { CacheService } from '../../service/cache-content.service';
import { HackerNewsServiceOfflineService } from '../../service/hacker-news-service-offline.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-news-cache-page',
  templateUrl: './news-cache-page.component.html'
})
export class NewsCachePageComponent implements OnInit {


  users: Observable<any>;
  loadMore$ = new Subject<string>();

  constructor(private cacheService:CacheService,
    private hackerNewsService: HackerNewsServiceOfflineService) { }

    ngOnInit() {

      this.users = this.loadMore$
      .switchMap((key) => this.cacheService.get(key, this.hackerNewsService.getUser(key)))
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

    getAllValue(key: string) {
      this.loadMore$.next(key);
    }
}
