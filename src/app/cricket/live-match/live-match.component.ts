import { Component, PlatformRef } from '@angular/core';
import { Router } from '@angular/router';
import { Afganistan, Australia, England, India, NewZealend, Pakistan, SauthAfrica, WestIndies, plr } from 'src/app/store';

@Component({
  selector: 'app-live-match',
  templateUrl: './live-match.component.html',
  styleUrls: ['./live-match.component.css']
})
export class LiveMatchComponent {

  obj:any;
  LIVE = {
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
    overChiMatch: 4,
    RUNS_ARRAY: [0],
    TOTAL_RUNS:0,
    TOTAL_WICKETS:0,
    wide:0,
    No_Ball:0,
    currentOver:0
  }


  AllTeams1:any[] = [{team:'India',players:India},{team:'Pakistan',players:Pakistan},{team:'Afganistan',players:Afganistan},{team:'New Zealand',players:NewZealend},{team:'England',players:England}, {team:'Australia',players:Australia},{team:'Sauth Africa',players:SauthAfrica},{team:'West Indies',players:WestIndies} ];
  randomArray: any [] = [0,1,2,3,4,6,'W','WD','NB',0];

  NotOutPlayers = {
    index_0: { name: 'A', run: 0, ball:0 , strike: true},
    index_1: { name: 'B', run: 0, ball:0 , strike: false},
  }

  currentBowler = {name: 'A', run: 0, over:0, wickets:0 };

  X:any;
  Y:any;

  constructor(private route:Router)
  {
    let a = localStorage.getItem('live');
    if(a!=null)
    {
       this.obj = JSON.parse(a);
       console.log(this.obj);
    }
    this.AssignToLIVE_Batting();
    this.AssignToLIVE_Bowling();
    this.LIVE.overChiMatch = this.obj.overs;
  }

  AssignToLIVE_Batting()
  {
    for(let i=0 ; i<this.AllTeams1.length ; i++)
    {
      if(this.AllTeams1[i].team== this.obj.batTeam )
      {
          this.LIVE.batting.url1 = `../../../assets/${this.obj.batTeam}.png`;
          this.LIVE.batting.batTeam = this.obj.batTeam ;
          this.LIVE.batting.BatPlayers = this.AllTeams1[i].players;
      }
    }
 this.openerBatting();
  }
  openerBatting()
  {
    this.X = this.LIVE.batting.BatPlayers[0];
     this.NotOutPlayers.index_0.name = this.X.name;
     this.NotOutPlayers.index_0.run = this.X.runs;
     this.NotOutPlayers.index_0.ball = this.X.bolls;
     //
     this.X = this.LIVE.batting.BatPlayers[1];
      this.NotOutPlayers.index_1.name = this.X.name;
      this.NotOutPlayers.index_1.run = this.X.runs;
      this.NotOutPlayers.index_1.ball = this.X.bolls;
  }
  changeBowler:any = 10;
  AssignToLIVE_Bowling()
  {
    for(let i=0 ; i<this.AllTeams1.length ; i++)
    {
      if(this.AllTeams1[i].team== this.obj.bowlTeam )
      {
          this.LIVE.bowling.url2 = `../../../assets/${this.obj.bowlTeam}.png`;
         this.LIVE.bowling.bowlTeam = this.obj.bowlTeam;
          this.LIVE.bowling.BolPlayers = this.AllTeams1[i].players;
      }
    }
    this.Y = this.LIVE.bowling.BolPlayers[this.changeBowler];
    console.log(this.Y);
    this.currentBowler.name = this.Y.name;
    this.currentBowler.run = this.Y.runs;
    this.currentBowler.over = this.Y.overs;

  }
 RUN:any;
 OVER_CHA_ARRAY: any [] = [];
 cnt:any;
 RUN_RATE:any = 0.00;
  callRandomRuns()
  {
    let a =  Math.floor(Math.random()*10) ;
   this.RUN = this.randomArray[a];
   this.addIn1OverArray(this.RUN);
   if(this.RUN=='W')
   {
    if(this.NotOutPlayers.index_0.strike)
    this.increaseRunsIN_LIVE(0,this.NotOutPlayers.index_0.name);

    if(this.NotOutPlayers.index_1.strike)
    this.increaseRunsIN_LIVE(0,this.NotOutPlayers.index_1.name);

     this.WicketGon();
   }
   if(typeof(this.RUN)=='number')
   {
    this.increasePlayerRuns(this.RUN);
    this.increaseScoreBoard(this.RUN);
   }


   if(this.RUN=='WD' || this.RUN=='NB')
   {
     this.giveWideORNoBall(this.RUN);
   }
  }
  // ^ WIDE OR NO Ball

  giveWideORNoBall(wideNOBall:any)
  {
    if(wideNOBall=='WD')
    {
       this.LIVE.wide +=1;
    }
    if(wideNOBall=='NB')
    {
       this.LIVE.No_Ball +=1;
    }
    this.increaseScoreBoard(1);
  }
  increasePlayerRuns(run:any)
  {
    if(this.NotOutPlayers.index_0.strike)
    {
       this.NotOutPlayers.index_0.run +=run;
       this.NotOutPlayers.index_0.ball +=1;
       this.increaseRunsIN_LIVE(run,this.NotOutPlayers.index_0.name);
       if(run%2!=0)
       {
         this.NotOutPlayers.index_0.strike = (!this.NotOutPlayers.index_0.strike);
         this.NotOutPlayers.index_1.strike = (!this.NotOutPlayers.index_1.strike);
         return;
       }
    }
    if(this.NotOutPlayers.index_1.strike)
    {
       this.NotOutPlayers.index_1.run +=run;
       this.NotOutPlayers.index_1.ball +=1;
       this.increaseRunsIN_LIVE(run,this.NotOutPlayers.index_1.name);
       if(run%2!=0)
       {
         this.NotOutPlayers.index_0.strike = (!this.NotOutPlayers.index_0.strike);
         this.NotOutPlayers.index_1.strike = (!this.NotOutPlayers.index_1.strike);
         return;
       }
    }
  }
  //* Increase Runs in Main LIVE OBJ;
copy11Batsmans:any[] = [];
  increaseRunsIN_LIVE(run:any, name:any)
  {
    this.copy11Batsmans = this.LIVE.batting.BatPlayers;
     for(let i=0 ; i<this.copy11Batsmans.length ; i++)
     {
       if(this.copy11Batsmans[i].name==name)
       {
         this.copy11Batsmans[i].runs +=run;
         this.copy11Batsmans[i].bolls +=1;
       }
     }
     this.LIVE.batting.BatPlayers = this.copy11Batsmans ;
     this.increaseDeleveredRuns(run);
  }

  increaseScoreBoard(run:any)
  {
    this.LIVE.RUNS_ARRAY.push(run);
    let a = 0;
    for(let i=0 ; i<this.LIVE.RUNS_ARRAY.length ; i++)
    {
       a+= this.LIVE.RUNS_ARRAY[i];
    }
    this.LIVE.TOTAL_RUNS = a;
  }
// ! WICKET GOWN
nextBatsman:any = 2;
nextBatsmanDetails:any;
  WicketGon()
  {
     this.LIVE.TOTAL_WICKETS +=1;
     if(this.NotOutPlayers.index_0.strike)
     {
      alert(this.NotOutPlayers.index_0.name + " Out on "+ this.NotOutPlayers.index_0.run + " runs")
      this.nextBatsmanDetails = this.LIVE.batting.BatPlayers[this.nextBatsman];
       this.NotOutPlayers.index_0.name =this.nextBatsmanDetails.name;
       this.NotOutPlayers.index_0.run =this.nextBatsmanDetails.runs;
       this.NotOutPlayers.index_0.ball =this.nextBatsmanDetails.bolls;
       this.NotOutPlayers.index_0.strike = true;
     }
     if(this.NotOutPlayers.index_1.strike)
     {
      alert(this.NotOutPlayers.index_1.name + " Out on "+ this.NotOutPlayers.index_1.run + " runs")
      this.nextBatsmanDetails = this.LIVE.batting.BatPlayers[this.nextBatsman];
       this.NotOutPlayers.index_1.name =this.nextBatsmanDetails.name;
       this.NotOutPlayers.index_1.run =this.nextBatsmanDetails.runs;
       this.NotOutPlayers.index_1.ball =this.nextBatsmanDetails.bolls;
       this.NotOutPlayers.index_1.strike = true;

     }
     this.nextBatsman++;
  }

//* Bolling LineUp :
//? BALLING
BALL:number = 1;

addIn1OverArray(run:any)
{
   this.OVER_CHA_ARRAY.push(run);
   if(typeof(run)=='number'|| run=='W')
   {
     let y= ((this.BALL-1) * 1.5)
     console.log("y : ",y);

     let x = `${this.LIVE.currentOver}.${Math.ceil(y)}`;
     console.log("x : ",x);
  this.RUN_RATE = this.LIVE.TOTAL_RUNS/+x;
  this.RUN_RATE = this.RUN_RATE.toFixed(2)
  this.BALL++;
   }

   if(this.BALL==7)
   {
     alert("Over Complete");
     this.LIVE.currentOver+=1;
     this.BALL = 1;
     this.OVER_CHA_ARRAY= [];
    //  ~ Overs Added
     this.BalllingPlayers = this.LIVE.bowling.BolPlayers;
     this.BalllingPlayers[this.changeBowler].overs +=1;
     this.LIVE.bowling.BolPlayers = this.BalllingPlayers;
// ~~~~~~~~~~~~~~~~~~~~
     this.Y = this.LIVE.bowling.BolPlayers[--this.changeBowler];
     this.currentBowler.name = this.Y.name;
     this.currentBowler.name = this.Y.name;
     this.checkIfMatchEND()
   }
}
//! MATCH END
checkIfMatchEND()
{
  if(this.LIVE.currentOver==this.LIVE.overChiMatch)
  {
    alert("MATCH ENDS");
    localStorage.setItem('matchEnds', JSON.stringify(this.LIVE));
this.route.navigateByUrl('/result')
  }
}
BalllingPlayers:any[] = [];
increaseDeleveredRuns(run:any)
{
  this.BalllingPlayers = this.LIVE.bowling.BolPlayers;
  for(let i=0 ; i<this.BalllingPlayers.length ; i++)
  {
    if(this.currentBowler.name==this.BalllingPlayers[i].name)
    {
       this.BalllingPlayers[i].runsDeleveredByBowler += run;
       this.currentBowler.run += this.BalllingPlayers[i].runsDeleveredByBowler;
       this.currentBowler.over += this.BalllingPlayers[i].overs;
    }
  }
  this.LIVE.bowling.BolPlayers = this.BalllingPlayers;
}


}
