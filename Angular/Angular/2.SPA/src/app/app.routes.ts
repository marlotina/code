import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroNameComponent } from './components/hero-name/hero-name.component';





const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero/:id', component: HeroComponent },
    { path: 'HeroName/:value', component: HeroNameComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
  ];

  //export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true} );
    export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);