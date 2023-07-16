import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-result',
  templateUrl: './final-result.component.html',
  styleUrls: ['./final-result.component.css']
})
export class FinalResultComponent implements OnDestroy {


  ngOnDestroy(): void {
    alert("AAAAAA")
    localStorage.removeItem('firstEnning_Start');
    localStorage.removeItem('firstEnning_Ends');
    localStorage.removeItem('secondEnning_Start');
    localStorage.removeItem('secondEnning_Ends');
    
  }

  
  LIVE:any;
  BATTING:any [] = [];
  BALLING:any [] = [];
  RUNSARRAY:any [] = [];
  TOTALRUNS:any;

  batWon = {
      wonTeam: '',
      ballLeft:0,
      wonByWickets:0
  }

  bowlWon ={
    wonTeam : '',
    wonByRuns:0
  }

  constructor(private router:Router)
  {
    let a = localStorage.getItem('secondEnning_Ends');
    if(a!=null)
    {
       this.LIVE = JSON.parse(a);
       console.log(this.LIVE);
       this.BATTING = this.LIVE.batting.BatPlayers;
       this.BALLING =  this.LIVE.bowling.BolPlayers;
       console.log(this.BATTING);
       this.RUNSARRAY = this.LIVE.RUNS_ARRAY;
       this.calculateRUNS();

    }
    this.whoWon();
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
// * ************************** WHO WON ???????????? *************************

whoWon()
{
   if(this.LIVE.First_Ening_RUNS<this.LIVE.Second_Ening_RUNS)
   {
        this.batWon.wonTeam = this.LIVE.batting.batTeam;
        this.batWon.wonByWickets = 11- this.LIVE.TOTAL_WICKETS;
   }
   else
   {
      this.bowlWon.wonTeam = this.LIVE.bowling.bowlTeam;
      this.bowlWon.wonByRuns = this.LIVE.First_Ening_RUNS - this.LIVE.Second_Ening_RUNS;
   }
}

}
