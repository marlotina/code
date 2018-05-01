import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../app/components/home/home.component';
import { UserComponent } from './components/user/user.component';

import { USER_ROUTES } from './components/user/user.routes';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path: 'user/:id', 
        component: UserComponent,
        children: USER_ROUTES
    },
    
    { path: '**', pathMatch:'full', redirectTo:'home' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES);
