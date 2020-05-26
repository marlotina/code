import { Component } from '@angular/core';

import { PendingsComponent } from '../pendings/pendings.component';
import { FinishedComponent } from '../finished/finished.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendingsComponent;
  tab2Root = FinishedComponent;

  constructor() {

  }
}
