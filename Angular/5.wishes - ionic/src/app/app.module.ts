import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { PendingsComponent } from '../pages/pendings/pendings.component';
import { FinishedComponent } from '../pages/finished/finished.component';
import { ListWishesService } from '../app/services/listwishes.service';
import { AddItemComponent } from '../pages/addItem/addItem.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlaceHolderPipe } from './pipes/placeholder.pipe';
import { DetailsComponent } from '../pages/details/details.component';
import { PendingsPipe } from './pipes/pendings.pipe';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingsComponent,
    FinishedComponent,
    AddItemComponent,
    DetailsComponent,
    PlaceHolderPipe,
    PendingsPipe,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingsComponent,
    FinishedComponent,
    AddItemComponent,
    DetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListWishesService
  ]
})
export class AppModule {}
