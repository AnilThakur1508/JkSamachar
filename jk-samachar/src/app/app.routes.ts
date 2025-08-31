import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SportsComponent } from './app-header/sports/sports.component';
import { AgricultureComponent } from './app-header/agriculture/agriculture.component';
import { JknewsComponent } from './app-header/jknews/jknews.component';
import { PoliticsComponent } from './app-header/politics/politics.component';
import { ToursimComponent } from './app-header/toursim/toursim.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path:'app-header', component: AppHeaderComponent},
    {path:'sports', component: SportsComponent},
    {path:'agriculture', component: AgricultureComponent},
    {path:'toursim', component: ToursimComponent},
    {path:'politics', component: PoliticsComponent},
    {path:'jknews', component: JknewsComponent},


    {path: '', redirectTo: '/home', pathMatch: 'full'},  
];
