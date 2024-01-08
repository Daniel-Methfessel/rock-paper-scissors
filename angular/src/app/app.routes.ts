import { Routes } from '@angular/router';
import { RockPaperScissorsComponent } from './components/rock-paper-scissors/rock-paper-scissors.component';

export const routes: Routes = [
    { path: '**', component: RockPaperScissorsComponent }
];
