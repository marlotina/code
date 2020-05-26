import { Pipe, PipeTransform } from '@angular/core';
import{ DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domSecure'
})
export class DomSecurePipe implements PipeTransform {

  constructor(private _domSanitizer:DomSanitizer){  }

  transform(value: string, url: string): any/*SafeResourceUrl*/ {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
