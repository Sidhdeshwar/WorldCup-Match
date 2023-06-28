export  interface  plr{
  name: string ,
  url: string,
  categery: string,
  runs:number,
  bolls:number;
  wickets:number;
  strikeRate: number;
  overs:number;
}


export interface ALL_TEAMS {
  TeamIndia: plr[];
  TeamPakistan: plr[];
  TeamAfganistan: plr[];
}

export const India : plr [] = [{name: "Rohit Sharma (C)", url:'', categery: "batting", runs:0, bolls:0,wickets:0,overs:0,  strikeRate: 145.26 },
             {name: "Shubhman Gill",url:'',categery: "batting", runs:0, bolls:0,wickets:0,overs:0, strikeRate: 160.76 },
            {name: "Virat Kohli",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 176.23 },
            {name: "Suryakumar Yadav",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 190.36 },
            {name: "Rishabh Pant (Wk)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 165.25 },
            {name: "Ajinkya Rahane",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 177.76 },
            {name: "Hardik Pandya",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 160.16 },
            {name: "Ravindra Jadeja",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 180.25 },
            {name: "Buvaneshwar Kumar",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 90.76 },
             {name: "Ravi Bishnoi",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 45.30 },
              {name: "Jasprit Bumrah",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 30.21 }];

export const Pakistan : plr [] = [
            {name: "Babar Azam (C)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 145.26 },
             {name: "Mohammad Rizwan (Wk)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 160.76 },
            {name: "Imad Wasim",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 176.23 },
            {name: "Naseem Shah",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 190.36 },
             {name: "Haris Sohail",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 165.25 },
           {name: "Haris Rauf",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 177.76 },
             {name: "Shaheen Afridi",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 160.16 },
           {name: "Asif Ali",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 180.25 },
            {name: "Iftikhar Ahmed",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 90.76 },
            {name: "Mohammad Hasnain",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 45.30 },
            {name: "Usman Qadir",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 30.21 }]

export const Afganistan : plr [] = [
  {name: "Mohammad Nabi (C)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 145.26 },
          {name: "Najibullah Zadran",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 160.76 },
        {name: "Rahmanullah Gurbaz (Wk)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 176.23 },
           {name: "Azmatullah Omarzai",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 190.36 },
          {name: "Darwish Rasooli",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 165.25 },
         {name: "Farid Ahmad Malik",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 177.76 },
          {name: "Fazal Haq Farooqi",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 160.16 },
          {name: "Hazratullah Zazai",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 180.25 },
         {name: "Ibrahim Zadran",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 90.76 },
           {name: "Mujeeb ur Rahman",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 45.30 },
          {name: "Naveen ul Haq",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,strikeRate: 30.21 }
];

// export const  TEAMS : plr [] = {
//   TeamIndia: playersOfIndia ,
//   TeamPakistan: playersOfPakistan,
//   TeamAfganistan: playersOfAfganistan
// }






//
