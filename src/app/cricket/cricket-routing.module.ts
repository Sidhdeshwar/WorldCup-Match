import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { StartComponent } from './start/start.component';
import { LiveMatchComponent } from './live-match/live-match.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
         path:'',
         component: AllTeamsComponent
      },
      {
         path: 'start',
         component: StartComponent
      },
      {
         path: 'live-match',
         component: LiveMatchComponent
      },
      {
         path: 'result',
         component: ResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CricketRoutingModule { }
