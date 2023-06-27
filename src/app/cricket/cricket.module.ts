import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CricketRoutingModule } from './cricket-routing.module';
import { CricketComponent } from './cricket.component';
import { AllTeamsComponent } from './all-teams/all-teams.component';
import { StartComponent } from './start/start.component';
import { LiveMatchComponent } from './live-match/live-match.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    CricketComponent,
    AllTeamsComponent,
    StartComponent,
    LiveMatchComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    CricketRoutingModule
  ]
})
export class CricketModule { }
