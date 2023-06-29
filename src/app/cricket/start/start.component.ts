import { Component } from '@angular/core';
import { Afganistan,Australia,England,India,NewZealend,Pakistan, SauthAfrica, WestIndies } from  'src/app/store';
import { ALL_TEAMS, plr } from 'src/app/store';



@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

Team1:any [] = [];
Team2:any [] = [];
team1 = '';
team2 = '';
url1: any ;
url2: any = `../../../assets/${this.team2}.png`;
date :any;
TwoTeams : any;
AllTeams1:any[] = [{team:'India',players:India},{team:'Pakistan',players:Pakistan},{team:'Afganistan',players:Afganistan},{team:'New Zealand',players:NewZealend},{team:'England',players:England}, {team:'Australia',players:Australia}, {team:'Sauth Africa',players:SauthAfrica},{team:'West Indies',players:WestIndies}  ];

obj = {
  team1:this.team1,
  team2:this.team2,
  myTeam:'',
  theyTeam:'',
  myHeadTail: '',
  MeWonToss:'',
  TheyWonToss:'',
  choose:'',
  overs:4,
  tosswinteam:'',
  batTeam:'',
  bowlTeam:''
}
constructor(){
  let a = localStorage.getItem('teams')
  if(a!=null)
  {
    this.TwoTeams= JSON.parse(a);
    this.date = this.TwoTeams.date;
    let arr = this.TwoTeams.teams.split(' Vs ');
    this.team1 = arr[0];
    this.team2 = arr[1];
  }
  this.url1 = `../../../assets/${this.team1}.png`;
  this.url2 = `../../../assets/${this.team2}.png`;
console.log("URL1", this.url1);
console.log("URL2", this.url2);

}

ShowTeam1()
{
   for(let i=0 ; i<this.AllTeams1.length ; i++)
   {
      if(this.AllTeams1[i].team==this.team1)
      {
         this.Team1 = this.AllTeams1[i].players;
      }
      if(this.AllTeams1[i].team==this.team2)
      {
         this.Team2 = this.AllTeams1[i].players;
      }
   }
}

selectMyTeam(myTeam:any)
{
  if(this.team1==myTeam )
  {
    this.obj.myTeam = myTeam;
    this.obj.theyTeam = this.team2;
  }
  if(this.team2==myTeam)
  {
     this.obj.myTeam = myTeam;
     this.obj.theyTeam = this.team1;
  }

}
myHeadTail(Headtail:any)
{
 this.obj.myHeadTail = Headtail;
}

makeToss()
{
  this.obj.MeWonToss = '';
  this.obj.TheyWonToss = '';
  let randomNumber = -1;
  if(this.obj.myTeam=='')
  {
    alert("Select Your Team First.")
  }
  else
  {
    randomNumber = Math.floor(Math.random() *100);
    if( +this.obj.myHeadTail==0 && randomNumber%2==0)
    this.obj.MeWonToss = this.obj.myTeam;

    else if( +this.obj.myHeadTail==1 && randomNumber%2!=0)
    this.obj.MeWonToss = this.obj.myTeam;

    else this.obj.TheyWonToss = this.obj.theyTeam;
  }
}

SelectOvers(overs:any)
{
   this.obj.overs = overs;
}

MeWonToss_BatBol(select:any)
{
   this.obj.choose = select;
}

LetsPlay()
{
  this.obj.team1 = this.team1;
  this.obj.team2 = this.team2;

  if(this.obj.choose!='' && this.obj.choose=='bat')
  {
     this.obj.batTeam = this.obj.myTeam;
     this.obj.bowlTeam = this.obj.theyTeam;
  }
  else if(this.obj.choose!='' && this.obj.choose=='bowl')
  {
     this.obj.bowlTeam = this.obj.myTeam;
     this.obj.batTeam = this.obj.theyTeam;
  }
  else
  {
     this.obj.batTeam = this.obj.myTeam;
     this.obj.bowlTeam = this.obj.theyTeam;
  }

  if(this.obj.MeWonToss!='')
  {
     this.obj.tosswinteam = this.obj.myTeam;
  }
  else
  {
    this.obj.tosswinteam = this.obj.theyTeam;
  }

  localStorage.setItem('live', JSON.stringify(this.obj));
}



}
