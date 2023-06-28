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
                BatPlayers: [],
             },
    bowling: {
                url2:'',
                bowlTeam:'',
                BolPlayers: Array<plr>,
              },
    overChiMatch: 0,
    oversWithRuns: Array<Array <number> >
  }


  AllTeams1:any[] = [{team:'India',players:India},{team:'Pakistan',players:Pakistan},{team:'Afganistan',players:Afganistan},];


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
     console.log(this.LIVE);

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
         return;
      }
    }
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
          break;
      }
    }
  }
}
