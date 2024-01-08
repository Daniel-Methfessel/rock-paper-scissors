import { Routes } from '@angular/router';
import { RockPaperScissorsComponent } from './components/rock-paper-scissors/rock-paper-scissors.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: 'play', component: RockPaperScissorsComponent },
    { path: '', component: AboutComponent },
    { path: '**', component: NotFoundComponent }
];
