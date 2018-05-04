import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { AuthGuard } from './service/auth-guard.service';



const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent 
    },
    { 
        path: 'page1', 
        component: Page1Component,
        canActivate: [AuthGuard],
        data:{
            roles: ['Admin','MasterDataUser']
        } 
    },
    { 
        path: 'page2', 
        component: Page2Component,
        canActivate: [AuthGuard],
        data:{
            roles: ['Admin','MasterDataUser','MasterDataManager']
        }
    },
    { path: '**', component: HomeComponent }
];

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES);
