export  interface  plr{
  name: string ,
  url: string,
  categery: string,
  runs:number,
  bolls:number;
  wickets:number;
  strikeRate: number;
  overs:number;
  runsDeleveredByBowler:number;
}


export interface ALL_TEAMS {
  TeamIndia: plr[];
  TeamPakistan: plr[];
  TeamAfganistan: plr[];
}

export const India : plr [] = [{name: "Rohit Sharma (C)", url:'', categery: "batting", runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 145.26 },
             {name: "Shubhman Gill",url:'',categery: "batting", runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0,  strikeRate: 160.76 },
            {name: "Virat Kohli",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 176.23 },
            {name: "Suryakumar Yadav",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 190.36 },
            {name: "Rishabh Pant (Wk)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 165.25 },
            {name: "Ajinkya Rahane",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 177.76 },
            {name: "Hardik Pandya",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 160.16 },
            {name: "Ravindra Jadeja",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 180.25 },
            {name: "Buvaneshwar Kumar",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 90.76 },
             {name: "Ravi Bishnoi",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 45.30 },
              {name: "Jasprit Bumrah",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 30.21 }];

export const Pakistan : plr [] = [
            {name: "Babar Azam (C)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 145.26 },
             {name: "Mohammad Rizwan (Wk)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 160.76 },
            {name: "Imad Wasim",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 176.23 },
            {name: "Naseem Shah",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 190.36 },
             {name: "Haris Sohail",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 165.25 },
           {name: "Haris Rauf",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 177.76 },
             {name: "Shaheen Afridi",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 160.16 },
           {name: "Asif Ali",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 180.25 },
            {name: "Iftikhar Ahmed",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 90.76 },
            {name: "Mohammad Hasnain",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 45.30 },
            {name: "Usman Qadir",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 30.21 }]

export const Afganistan : plr [] = [
  {name: "Mohammad Nabi (C)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 145.26 },
          {name: "Najibullah Zadran",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 160.76 },
        {name: "Rahmanullah Gurbaz (Wk)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 176.23 },
           {name: "Azmatullah Omarzai",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 190.36 },
          {name: "Darwish Rasooli",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 165.25 },
         {name: "Farid Ahmad Malik",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 177.76 },
          {name: "Fazal Haq Farooqi",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 160.16 },
          {name: "Hazratullah Zazai",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 180.25 },
         {name: "Ibrahim Zadran",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 90.76 },
           {name: "Mujeeb ur Rahman",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 45.30 },
          {name: "Naveen ul Haq",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 30.21 }
];

export const NewZealend : plr [] = [
  {name: "Kane Williamson (C)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 145.26 },
          {name: "Tom Latham",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 160.76 },
        {name: "Tom Blundell (Wk)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 176.23 },
           {name: "Mitchell Santner",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 190.36 },
          {name: "Henry Nicholls",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 165.25 },
         {name: "Michael Bracewell",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 177.76 },
          {name: "Mark Chapman",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 160.16 },
          {name: "Finn Allen",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 180.25 },
         {name: "Devon Conway",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 90.76 },
           {name: "Glenn Phillips",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 45.30 },
          {name: "Lockie Ferguson",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 30.21 }
];

export const England : plr [] = [
  {name: "Jos Buttler(C)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 145.26 },
          {name: "Moeen Ali",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 160.76 },
        {name: "Jonny Bairstow (Wk)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 176.23 },
           {name: "Harry Brook",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 190.36 },
          {name: "Sam Curran",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 165.25 },
         {name: "Alex Hales",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 177.76 },
          {name: "Chris Jordan",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 160.16 },
          {name: "Liam Livingstone",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 180.25 },
         {name: "Dawid Malan",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 90.76 },
           {name: "Phil Salt",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 45.30 },
          {name: "Ben Stokes",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 30.21 }
];

export const Australia : plr [] = [
  {name: "David Warner (C)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 145.26 },
          {name: "Usman Khawaja",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 160.76 },
        {name: "Marnus Labuschagne (Wk)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 176.23 },
           {name: "Steve Smith",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 190.36 },
          {name: "Travis Head",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 165.25 },
         {name: "Alex Carey",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 177.76 },
          {name: "Pat Cummins",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 160.16 },
          {name: "Josh Hazlewood",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 180.25 },
         {name: "Scott Boland",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 90.76 },
           {name: "Nathan Lyon",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 45.30 },
          {name: "Josh Inglis",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 30.21 }
];

export const SauthAfrica : plr [] = [
  {name: "Quinton de Kock (C)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 145.26 },
          {name: "Ryan Rickelton",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 160.76 },
        {name: "Heinrich Klaasen (Wk)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 176.23 },
           {name: "Rassie van der Dussen",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 190.36 },
          {name: "Temba Bavuma",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 165.25 },
         {name: "Reeza Hendricks",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 177.76 },
          {name: "Tony de Zorzi",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 160.16 },
          {name: "Tristan Stubbs",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 180.25 },
         {name: "Rilee Rossouw",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 90.76 },
           {name: "David Miller",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 45.30 },
          {name: "Andile Phehlukwayo",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 30.21 }
];
export const WestIndies : plr [] = [
  {name: "Rovman Powell (C)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 145.26 },
          {name: "Johnson Charles",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 160.76 },
        {name: "Shimron Hetmyer (Wk)",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 176.23 },
           {name: "Brandon King",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 190.36 },
          {name: "Evin Lewis",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 165.25 },
         {name: "Kyle Mayers",url:'',categery: "batting",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 177.76 },
          {name: "Nicholas Pooran",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 160.16 },
          {name: "Jason Holder",url:'',categery: "allRounder",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 180.25 },
         {name: "Raymon Reifer",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 90.76 },
           {name: "Yannic Cariah",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 45.30 },
          {name: "Sheldon Cottrell",url:'',categery: "bowling",runs:0, bolls:0,wickets:0,overs:0,runsDeleveredByBowler:0, strikeRate: 30.21 }
];

//
