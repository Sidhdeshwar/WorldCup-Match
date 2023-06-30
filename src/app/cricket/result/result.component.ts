import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  LIVE:any;
  BATTING:any [] = [];
  BALLING:any [] = [];
  RUNSARRAY:any [] = [];
  TOTALRUNS:any;

  // ******* Second Enning Copy Variables :
  LIVE2 = {
    batting: {
                url1: '',
                batTeam: '',
                BatPlayers:[{}],
             },
    bowling: {
                url2:'',
                bowlTeam:'',
                BolPlayers: [{}],
              },
    overChiMatch: 4 ,
    RUNS_ARRAY: [0],
    TOTAL_RUNS:0,
    TOTAL_WICKETS:0,
    wide:0,
    No_Ball:0,
    currentOver:0,
    First_Ening_RUNS:0,
    Second_Ening_RUNS:0
  }


SECOND_Enning_BATTING:any;
SECOND_Enning_BOWLING:any;
  // ******* Second Enning Copy Variables :
  constructor(private router:Router)
  {
    let a = localStorage.getItem('matchEnds');
    if(a!=null)
    {
       this.LIVE = JSON.parse(a);
       console.log(this.LIVE);
       this.BATTING = this.LIVE.batting.BatPlayers;
       this.BALLING =  this.LIVE.bowling.BolPlayers;
       console.log(this.BATTING);
       this.RUNSARRAY = this.LIVE.RUNS_ARRAY;
       this.calculateRUNS();
   // * Assign For Second Enning ===>
   this.SECOND_Enning_BATTING = this.LIVE.bowling;
   this.SECOND_Enning_BOWLING = this.LIVE.batting;

    }
  }

  calculateRUNS()
  {
     let a = 0;
     for(let i=0 ; i<this.RUNSARRAY.length ; i++)
     {
       a+=this.RUNSARRAY[i];
     }
     this.TOTALRUNS = a;
  }

  //* ******************** Start 2nd Enning : - ***********************************

  StartSecondEning()
  {
    //? BATTING ASSIGNING
     this.LIVE2.batting.url1 = this.SECOND_Enning_BATTING.url2;
     this.LIVE2.batting.batTeam = this.SECOND_Enning_BATTING.bowlTeam;
     this.LIVE2.batting.BatPlayers = this.SECOND_Enning_BATTING.BolPlayers;
     //! Bowling Assigning
     this.LIVE2.bowling.url2 = this.SECOND_Enning_BOWLING.url1;
     this.LIVE2.bowling.bowlTeam = this.SECOND_Enning_BOWLING.batTeam;
     this.LIVE2.bowling.BolPlayers = this.SECOND_Enning_BOWLING.BatPlayers;

     //^ OVER chi MATCH
     this.LIVE2.overChiMatch = this.LIVE.overChiMatch;

     //~ FIRST ENNING RUNS :
     this.LIVE2.First_Ening_RUNS = this.LIVE.First_Ening_RUNS;

     localStorage.setItem('secondEnning',JSON.stringify(this.LIVE2))
     this.router.navigateByUrl('/live-match');

  }


}
