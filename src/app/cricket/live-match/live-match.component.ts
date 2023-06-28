import { Component, PlatformRef } from '@angular/core';
import { Afganistan, India, Pakistan, plr } from 'src/app/store';

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
                BatPlayers:[],
             },
    bowling: {
                url2:'',
                bowlTeam:'',
                BolPlayers: [],
              },
    overChiMatch: 0,
    oversWithRuns: Array<number>,
    TOTAL_RUNS:0,
    TOTAL_WICKETS:0
  }


  AllTeams1:any[] = [{team:'India',players:India},{team:'Pakistan',players:Pakistan},{team:'Afganistan',players:Afganistan},];
  randomArray: any [] = [0,1,2,3,4,6,'W','WD','NB','1+WD'];

  NotOutPlayers = {
    index_0: { name: 'A', run: 0, ball:0 , strike: true},
    index_1: { name: 'B', run: 0, ball:0 , strike: false},
  }
  currentBowler = {name: 'A', run: 0, over:0 };

  X:any;
  Y:any;

  constructor()
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
    this.Y = this.LIVE.bowling.BolPlayers[10];
    console.log(this.Y);
    
    this.currentBowler.name = this.Y.name;
    this.currentBowler.run = this.Y.runs;
    this.currentBowler.over = this.Y.overs;

  }
 RUN:any;
 OVER_CHA_ARRAY: any [] = [];
 cnt:any;
  callRandomRuns()
  {
    let a =  Math.floor(Math.random()*10) ;
   this.RUN = this.randomArray[a];

   if(typeof(this.RUN)=='number')
    this.OVER_CHA_ARRAY.push(this.RUN);
  }
}
