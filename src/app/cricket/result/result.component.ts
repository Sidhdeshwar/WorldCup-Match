import { Component } from '@angular/core';

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
  constructor()
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
       this.calculateRUNS()
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


}
