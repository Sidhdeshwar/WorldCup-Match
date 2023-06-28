import { Component } from '@angular/core';

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
date :any;
TwoTeams : any;
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
}

ShowTeam1()
{
   for(let i=0 ; i<this.AllTeamPlayers.length ; i++)
   {
     console.log(this.AllTeamPlayers[0].team);
     
   }
 
  
}

AllTeamPlayers: any [] = [
  { team:  { India: { plr1: {name: "Rohit Sharma (C)",categery: "batting",strikeRate: 145.26 },
             plr2: {name: "Shubhman Gill",categery: "batting",strikeRate: 160.76 },
             plr3: {name: "Virat Kohli",categery: "batting",strikeRate: 176.23 },
             plr4: {name: "Suryakumar Yadav",categery: "batting",strikeRate: 190.36 },
             plr5: {name: "Rishabh Pant (Wk)",categery: "batting",strikeRate: 165.25 },
             plr6: {name: "Ajinkya Rahane",categery: "batting",strikeRate: 177.76 },
             plr7: {name: "Hardik Pandya",categery: "allRounder",strikeRate: 160.16 },
             plr8: {name: "Ravindra Jadeja",categery: "allRounder",strikeRate: 180.25 },
             plr9: {name: "Buvaneshwar Kumar",categery: "bowling",strikeRate: 90.76 },
             plr10: {name: "Ravi Bishnoi",categery: "bowling",strikeRate: 45.30 },
             plr11: {name: "Jasprit Bumrah",categery: "bowling",strikeRate: 30.21 }
            },
           Pakistan: { plr1: {name: "Babar Azam (C)",categery: "batting",strikeRate: 145.26 },
            plr2: {name: "Mohammad Rizwan (Wk)",categery: "batting",strikeRate: 160.76 },
            plr3: {name: "Imad Wasim",categery: "batting",strikeRate: 176.23 },
            plr4: {name: "Naseem Shah",categery: "batting",strikeRate: 190.36 },
            plr5: {name: "Haris Sohail",categery: "batting",strikeRate: 165.25 },
            plr6: {name: "Haris Rauf",categery: "batting",strikeRate: 177.76 },
            plr7: {name: "Shaheen Afridi",categery: "allRounder",strikeRate: 160.16 },
            plr8: {name: "Asif Ali",categery: "allRounder",strikeRate: 180.25 },
            plr9: {name: "Iftikhar Ahmed",categery: "bowling",strikeRate: 90.76 },
            plr10: {name: "Mohammad Hasnain",categery: "bowling",strikeRate: 45.30 },
            plr11: {name: "Usman Qadir",categery: "bowling",strikeRate: 30.21 }
           }, 
           
Afganistan: { plr1: {name: "Mohammad Nabi (C)",categery: "batting",strikeRate: 145.26 },
           plr2: {name: "Najibullah Zadran",categery: "batting",strikeRate: 160.76 },
           plr3: {name: "Rahmanullah Gurbaz (Wk)",categery: "batting",strikeRate: 176.23 },
           plr4: {name: "Azmatullah Omarzai",categery: "batting",strikeRate: 190.36 },
           plr5: {name: "Darwish Rasooli",categery: "batting",strikeRate: 165.25 },
           plr6: {name: "Farid Ahmad Malik",categery: "batting",strikeRate: 177.76 },
           plr7: {name: "Fazal Haq Farooqi",categery: "allRounder",strikeRate: 160.16 },
           plr8: {name: "Hazratullah Zazai",categery: "allRounder",strikeRate: 180.25 },
           plr9: {name: "Ibrahim Zadran",categery: "bowling",strikeRate: 90.76 },
           plr10: {name: "Mujeeb ur Rahman",categery: "bowling",strikeRate: 45.30 },
           plr11: {name: "Naveen ul Haq",categery: "bowling",strikeRate: 30.21 }
          },   

           }
          }

]


}
