var replay="YES";
while(replay=="YES"){
var nbcache;
var nbattempts;
var difficulty_level ;
do {
    difficulty_level=prompt("choose the difficulty level: easy , medium , hard ");
}while((difficulty_level.toUpperCase()!="EASY")&&(difficulty_level.toUpperCase()!="MEDIUM")
&&(difficulty_level.toUpperCase()!="HARD"));


switch (difficulty_level.toLowerCase()) {
    case "easy":
        {nbcache=Math.floor((Math.random())*11);
        nbattempts=5;
        break;
    } 

    case 'medium':
        {
        nbcache=Math.floor((Math.random())*51);
        nbattempts=4;
        break;
        }
    case 'hard':
        {
        nbcache=Math.floor((Math.random())*101);
        nbattempts=3;
        break;
        }


        }
var n=1;
var z=prompt("Do an attempt ");
while((z!=nbcache)&&(n<=nbattempts)){
    if(z<nbcache)
    {
        n++;
    z=prompt("Do another attempt (HINT : the number is greater)");
    }

    else{
        n++;
    z=prompt("Do another attempt (HINT : the number is smaller)");
    }


}

    if(z==nbcache){
    alert("vous avez gagné:le nombre de tentative est "+n+" le nombre recherché est: "+nbcache);

}
else if(n>nbattempts){
    alert("vous avez perdu :le nombre de tentative est "+n + " le nombre recherché est: "+ nbcache) ;
}
    replay=prompt("voulez-vous rejouer? : YES NO");
}