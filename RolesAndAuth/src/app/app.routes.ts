import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { AuthGuard } from './service/auth-guard.service';
import { NewPage2Component } from './components/page2/new-page2/new-page2.component';
import { EditPage2Component } from './components/page2/edit-page2/edit-page2.component';
import { HomePageComponent } from './components/page2/home-page/home-page.component';
import { NewsPageComponent } from './components/page-hawker/news-page.component';
import { NewsCachePageComponent } from './components/news-cache-page/news-cache-page.component';



const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
        path: 'NewsCachePage', 
        component: NewsCachePageComponent 
    }, 
    { 
        path: 'newspage', 
        component: NewsPageComponent
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
        },
        children:[
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { 
                path: 'home', 
                component: HomePageComponent,
                canActivate: [AuthGuard],
                data:{
                    roles: ['Admin','MasterDataUser','MasterDataManager']
                },
            },
            { 
                path: 'new', 
                component: NewPage2Component,
                canActivate: [AuthGuard],
                data:{
                    roles: ['Admin','MasterDataUser']
                },
            },
            { 
                path: 'edit', 
                component: EditPage2Component,
                data:{
                    roles: ['Admin','MasterDataUser','MasterDataManager']
                }
            },
            { path: '**', pathMatch:'full', redirectTo:'new' }
        ]
    },
    { path: '**', component: HomeComponent } 
];

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES);
