// Question Requirements:

/*
1. Game must end when the score is chased.
    2. After every over, target should also be display
    for the second inning
    3. Batsmen and bowlers name should also display.
    4. Run rate after every over
    5. Projected score after every over
    6. Weather (Sunny, Rainy (5000 delay))
*/


function game()
{
    var wickets = 0;
    var score = 0;
    var overs = 0;
    
    console.log(" Welcome to Saadi Town Super League!!! ");
    console.log(" ------------------------------------- ");

    /*
    Sleep() With the help of Sleep() we can make a function to pause execution for a 
    fixed amount of time. In programming languages such as C and Php we would call sleep(sec).
    */

    sleep(2000); 

    console.log(" Game Started !!!!");
    console.log(" ################ ");

    sleep(2000);
    var pakTeamPlayers = ["Babar", "Hafiz", "Rizwan", "Afridi", "Shahdab", "Aamir", "Wahab", "Ali", "Asif", "Kamran"];
    var indTeamPlayers = ["Rohit", "Kohli", "Dhoni", "Jadeja", "Bumrah", "Shami", "Pandya", "Raina", "Yuvraj", "Sehwag"];

    while(overs < 3 && wickets < 10)
    {
        // for(var k = 0 ; k < bowlers.length ; k++)
        // {
        //     console.log(" The bowler name is = " + bowlers[k]);
        
        for (var i = 1;  i<=6 ; i++)
        {
            sleep(2000);
            

            console.log(" Balls = " + overs + "." + i + ") " + " Delivered by " + pakTeamPlayers[overs+4]);

            var run = Math.floor(Math.random() * 7);
            
            if(run == 0)
            {
               
                console.log(" Quack " + indTeamPlayers[wickets] + " Out !!!");
                sleep(1000);
                wickets++;
                console.log(" Score is = " + score + " and wickets = " + wickets);
                sleep(2000);

                if(wickets == 10)
                {
                    console.log(" All out.");
                    console.log(" ******* ");
                    break;
                }

            }
            else if(run == 1){
                console.log(" That's a good single. "+ run + " run");
                score += run;
            }

            else if(run == 2){
                console.log(" That's a good double. "+ run + " runs");
                score += run;
            }

            else if(run == 3){
                console.log(" That's a good triple, very nice running by both batsmans. "+ run + " runs");
                score += run;
            }

            else if(run == 4){
                console.log(" That's an amazing four. "+ run + " runs");
                score += run;
            }

            else if(run == 5){
                console.log(" Very impressive, superb running.  "+ run + " runs");
                score += run;
            }

            else{
                console.log(" That's an outstanding six. "+ run + " runs");
                score += run;

            }
            
    
        }
        
        sleep(2000);
        overs++;

        sleep(3000);
        var weather = ["Rainy", "Sunny","Cloudy"];
        console.log(" The cuurent weather update is showing that weather is " + weather[ Math.floor(Math.random()*3)] );

        sleep(3000);
        var run_rate = (score / overs);
        console.log(" The run rate of the current over was = " + run_rate );

        sleep(3000);
        var projected_score = run_rate * 3;
        console.log(" The projected score of the team with respect to the current run rate is = " + projected_score );

        if(wickets !== 10)
        {
            console.log("Overs # " + overs + " overs completed.");
            console.log("Score: " + score + " wickets = " + wickets);
            console.log(" **************** ");
        }
    return score;


    // }
    }

    // return score;
}

function toss()
{
    var result = "Heads";
    var ans = Math.floor(Math.random()* 2); // floor --> 0 & 1. ceil --> 1 & 2.
    if(ans == 0)
    {
        result = "Tails";
        return result;

    }
    else{
        result = "Heads";
        return result;
    }

}




function cricket()
{
    var PakCoin = prompt(" What you will choose Heads or Tails (Pakistani Captain) ");
    var PakScore = 0;
    var IndScore = 0;

    console.log(" Welcome to the new, Interesting and very exciting cricket match between "+
    " Pakistan and India.")

    sleep(3000);
    console.log(" So Empire is now going to flip a coin. Lets see who will win the toss !!");
    sleep(3000);

    var flag = 0;

    var coin =  toss();

    if(coin == PakCoin)
    {
        console.log(" Pakistan won the toss and elected to bat first!!!");

        sleep(3000);

        PakScore = game();
        console.log("-----------------");
        console.log("Target to chase for India is  --> " + ( PakScore + 1) );
        sleep(3000);

        IndScore = game(); // Indscore is now going into the game() function.
        console.log("-----------------");
        console.log(" Indian Team score is --> " + IndScore);

        sleep(2000);
        console.log(" ------------------Match results --------------------");
        sleep(3000);

        if ( IndScore >= (PakScore + 1) )
        {
            console.log(" India successfully chased the target.");
            flag+=1;
            
        }

        else if ( IndScore < PakScore  )
        {
            console.log(" Pakistan successfully defended the target.");
            flag+=1;   
        }

        else{
            console.log(" Match is draw. Both teams played very well.");
            flag+=1;
        }
        
        if(flag == 1)
        {
            console.log("Game finished.");
        }

        
        
    }

    else{
        console.log(" India won the toss and elected to bat first!!!");

        sleep(3000);
        
        IndScore = game();
        console.log("-----------------");
        console.log("Target to chase for Pakistan is  --> " + (IndScore + 1) );
        sleep(3000);

        PakScore = game();
        console.log("-----------------");
        console.log(" Pakistan Team score is --> " + PakScore);

        sleep(2000);
        console.log(" ------------------Match results --------------------");
        sleep(3000);

        if (PakScore >= (IndScore + 1) )
        {
            console.log(" Pakistan successfully chased the target.");
            flag+=1;
            
        }

        else if ( PakScore < IndScore )
        {
            console.log(" India successfully defended the target.");
            flag+=1;   
        }

        else{
            console.log(" Match is draw. Both teams played very well.");
            flag+=1;
        }
        
        if(flag == 1)
        {
            console.log("Game finished.");
        }

    }

    
    // else
        // {
        //     flag = 0;
        //     console.log(" India successfully defended the target and finally won the match.");
        // }
    
    
    // if(PakScore > IndScore)
    // {
    //     console.log(" Absolutely amazing, Pakistan won the match.")
    
    // }

    // else if(IndScore > PakScore)
    // {
    //     console.log(" Absolutely amazing, India won the match.")
    // }

    // else{
    //     console.log(" Match is tied. Both teams got 1 point.");
    // }

}

function sleep(milliseconds)
{
    const date = Date.now();
    let currentdate = null;

    do{
        currentdate = Date.now();
    }
    while(currentdate - date < milliseconds);
}

cricket();