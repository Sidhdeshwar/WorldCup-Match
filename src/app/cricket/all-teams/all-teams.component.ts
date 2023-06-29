import { Component } from '@angular/core';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.css']
})
export class AllTeamsComponent {

  GroupA = ['England','Australia','Sauth Africa','West Indies'];
  GroupB = ['India','Pakistan','New Zealand','Afganistan'];

  ScheduledMatchesOfA:any [] = [];
  ScheduledMatchesOfB:any [] = [];
  FinalSchedule: any[] = [];

  constructor(){}

  selectedGroup(group:any)
  {
        this.ScheduledMatchesOfA = this.generateSchedule(this.GroupA);
        this.ScheduledMatchesOfB = this.generateSchedule(this.GroupB);

       this.FinalSchedule =  this.AlternateTeam() ;
        this.segregate();
  }

  generateSchedule(Group:any [])
  {
    let ScheduledMatches = [];
      for(let i=0 ; i<Group.length-1 ; i++)
      {
        for(let j=i+1 ; j<Group.length ; j++)
        {
          ScheduledMatches.push(`${Group[i]} Vs ${Group[j]}`)
        }
      }
      return ScheduledMatches;
  }
  AlternateTeam()
  {

   let a : any [] = [];
   let now = new Date();
   var x = new Date();
   let cnt=0;
   let counter = 0;
for(let i=0 ; i< this.ScheduledMatchesOfA.length ; i++  )
{
       now.setDate( new Date().getDate()+cnt++);
       x = now;
       a.push({teams: this.ScheduledMatchesOfA[i], date: x.toDateString()});
       console.log(now);
      now.setDate( new Date().getDate()+cnt++);
      x = now;
       a.push({teams: this.ScheduledMatchesOfB[i], date: x.toDateString()});
}
return a;
  }

  segregate()
  {
    this.ScheduledMatchesOfA = [];
    this.ScheduledMatchesOfB = [];
    let now = new Date()
     for(let i=0 ; i<this.FinalSchedule.length ; i++)
     {
        for(let j=0 ; j<this.GroupA.length ; j++)
        {
          if(this.FinalSchedule[i].teams.includes(this.GroupA[j]))
          {
            let obj = 1;
            this.ScheduledMatchesOfA.push(this.FinalSchedule[i]);
            break;
          }
          if(this.FinalSchedule[i].teams.includes(this.GroupB[j]))
          {
            this.ScheduledMatchesOfB.push(this.FinalSchedule[i]);
            break;
          }
        }
     }
     this.ScheduledMatchesOfA = this.MakeTeamsAlternate(this.ScheduledMatchesOfA);
     this.ScheduledMatchesOfB = this.MakeTeamsAlternate(this.ScheduledMatchesOfB);

  }

  MakeTeamsAlternate(arr:any[])
  {
     let i=0;
     let j = arr.length - 1;
     let a:any [] = [];
     while(i<j)
     {
       a.push(arr[i].teams);
       a.push(arr[j].teams);
       i++;
       j--;
     }
     for(let i=0 ; i<a.length ; i++)
     {
       arr[i].teams = a[i];
     }

     return arr;
  }

  PayNow(obj:any)
  {
   localStorage.setItem('teams', JSON.stringify(obj));
  }



}
