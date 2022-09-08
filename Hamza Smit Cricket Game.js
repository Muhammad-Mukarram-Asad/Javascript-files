// function to delay console

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

// function for toss between two team

function toss() {
    return (Math.floor(Math.random() * 2) === 0) ? 'Tail' : 'Head';
}


// weather checking function 


function weather() {
    return (Math.floor(Math.random() * 2) === 0) ? 'Sunny' : 'Rainy';
}

function cricket() {

    console.log("Welcome to PAK vs IND match");
    console.log("---------------------------")
    sleep(2000);
    console.log("So umpire is going to toss! let's see!");
    console.log("")
    sleep(2000);

    var pakTeamPlayers = ["Babar", "Hafiz", "Rizwan", "Afridi", "Shahdab", "Aamir", "Wahab", "Ali", "Asif", "Kamran"];
    var indTeamPlayers = ["Rohit", "Kohli", "Dhoni", "Jadeja", "Bumrah", "Shami", "Pandya", "Raina", "Yuvraj", "Sehwag"];
    var pakScore = 0;
    var indScore = 0;
    var indWkts = 0;
    var pakWkts = 0;
    var overs = 0;
    var coin = toss();
    if (coin == "Head") {
        console.log("Pakistan won the toss and elected to bat first");
        sleep(2000);
        console.log("******** Game Started ********");
        console.log("------------------------------");
        sleep(1000);

        

        while (overs < 3 && pakWkts < 10) {

            var checkWeather = weather();

            for (var i = 1; i <= 6; i++) {

                sleep(2000);

                console.log("Ball # " + overs + "." + i + " Deliverd By " + indTeamPlayers[overs + 4]);
                var run = Math.floor(Math.random() * 7);

                if (run == 0) {
                    sleep(1000);
                    console.log("");
                    console.log("Quack " + pakTeamPlayers[pakWkts] + " Out!");
                    sleep(1000);
                    pakWkts++;
                    console.log("PAK Score: " + pakScore + "/" + pakWkts);
                    console.log("");
                    sleep(2000);

                    if (pakWkts === 10) {
                        sleep(1000);
                        console.log("Pakistan All out!");
                        console.log("****************");
                        break;
                    }

                } else {
                    console.log(pakTeamPlayers[pakWkts] + " Great Shot. " + run + " runs.");
                    console.log("");
                    sleep(1000);
                    pakScore += run;
                }


            }
            sleep(4000);
            overs++;

            if (pakWkts !== 10) {
                console.log("Over # " + overs + " Completed");
                console.log("PAK - Score: " + pakScore + "/" + pakWkts + "------------runrate: " + pakScore/overs);
                console.log("---------- Projected Score is " + (pakScore*3) +" ----------" );
                console.log("************");

                if(checkWeather == "Rainy"){
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("    ///////// Rainy Weather Please Wait //////////")
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    sleep(5000);

                }

                sleep(3000);

            }
        }


        console.log("--------------------");
        console.log("India Target to chase ", pakScore + 1);
        console.log("");
        sleep(3000);

        overs = 0;

        while (overs < 3 && indWkts < 10) {


            var checkWeather = weather();


            for (var i = 1; i <= 6; i++) {

                sleep(2000);

                console.log("Ball # " + overs + "." + i + " Deliverd By " + pakTeamPlayers[overs + 4]);
                var run = Math.floor(Math.random() * 7);

                if (run == 0) {
                    sleep(1000);
                    console.log("");
                    console.log("Quack " + indTeamPlayers[indWkts] + " Out!");
                    sleep(1000);
                    indWkts++;
                    console.log("IND Score: " + indScore + "/" + indWkts);
                    console.log("");
                    sleep(2000);

                    if (indWkts === 10) {
                        sleep(1000);
                        console.log("India All out!");
                        console.log("****************");
                        console.log("------------------");
                        console.log("PAK Won the match");
                        console.log("------------------");
                        sleep(2000);
                        break;
                    }

                } else {
                    console.log(indTeamPlayers[indWkts] + " Great Shot. " + run + " runs.");
                    console.log("");
                    indScore += run;
                    if (indScore > pakScore) {
                        console.log("------------------");
                        console.log("IND Won the match");
                        console.log("IND - Score: " + indScore + "/" + indWkts);
                        console.log("------------------");
                        sleep(2000);
                        return;
                    }
                }


            }
            sleep(2000);
            overs++;

            if (indWkts !== 10) {

                if(indScore < pakScore){
                console.log("Over # " + overs + " Completed");
                console.log("IND - Score: " + indScore + "/" + indWkts + "------------runrate: " + indScore/overs);;
                if(checkWeather == "Rainy"){
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("    ///////// Rainy Weather Please Wait //////////")
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    sleep(5000);

                }
                sleep(1000);
            }

                if(pakScore > indScore){
                    console.log("India need " + (pakScore - indScore) + " runs to win");
                    console.log("************");
                    sleep(3000);
                }

            }
        }


        if (pakScore > indScore) {
            console.log("------------------");
            console.log(" PAK Won the Match ");
            console.log("------------------");
            sleep(2000);
        }else if (pakScore == indScore) {
            console.log("------------------");
            console.log("   Match Tied");
            console.log("------------------");
            sleep(2000);
        }

    }

    // if india won the toss then this below code:
    else
    {

        console.log("India won the toss and elected to bat first");
        sleep(2000);
        console.log("******** Game Started ********");
        console.log("------------------------------");
        sleep(1000);

        

        while (overs < 3 && indWkts < 10) {

            var checkWeather = weather();

            
            for (var i = 1; i <= 6; i++) {

                sleep(2000);

                console.log("Ball # " + overs + "." + i + " Deliverd By " + pakTeamPlayers[overs + 4]);
                var run = Math.floor(Math.random() * 7);

                if (run == 0) {
                    sleep(1000);
                    console.log("");
                    console.log("Quack " + indTeamPlayers[indWkts] + " Out!");
                    sleep(1000);
                    indWkts++;
                    console.log("IND Score: " + indScore + "/" + indWkts);
                    console.log("");
                    sleep(2000);

                    if (indWkts === 10) {
                        sleep(1000);
                        console.log("Inia All out!");
                        console.log("****************");
                        break;
                    }

                } else {
                    console.log(indTeamPlayers[indWkts] + " Great Shot. " + run + " runs.");
                    console.log("");
                    sleep(1000);
                    indScore += run;
                }


            }
            sleep(4000);
            overs++;

            if (indWkts !== 10) {
                console.log("Over # " + overs + " Completed");
                console.log("IND - Score: " + indScore + "/" + indWkts + "------------runrate: " + indScore/overs);;
                console.log("---------- Projected Score is " + ((indScore/overs)*3) +" ----------" );
                console.log("************");
                console.log("");
                sleep(1000);
                if(checkWeather == "Rainy"){
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("    ///////// Rainy Weather Please Wait //////////")
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    sleep(5000);

                }
                sleep(3000);

            }
        }

        console.log("--------------------");
        console.log("Pakistan Target to chase ", indScore + 1);
        console.log("");
        sleep(3000);


        overs = 0;

        while (overs < 3 && pakWkts < 10) {

            var checkWeather = weather();


            for (var i = 1; i <= 6; i++) {

                sleep(2000);

                console.log("Ball # " + overs + "." + i + " Deliverd By " + indTeamPlayers[overs + 4]);
                var run = Math.floor(Math.random() * 7);

                if (run == 0) {
                    sleep(1000);
                    console.log("");
                    console.log("Quack " + pakTeamPlayers[pakWkts] + " Out!");
                    sleep(1000);
                    pakWkts++;
                    console.log("PAK-Score: " + pakScore + "/" + pakWkts);
                    console.log("");
                    sleep(2000);

                    if (pakWkts === 10) {
                        sleep(1000);
                        console.log("Pakistan All out!");
                        console.log("****************");
                        console.log("------------------");
                        console.log("India Won the match");
                        console.log("------------------");
                        sleep(2000);
                        break;
                    }

                } else {
                    console.log(pakTeamPlayers[pakWkts] + " Great Shot. " + run + " runs.");
                    console.log("");
                    pakScore += run;
                    if (pakScore > indScore) {
                        console.log("------------------");
                        console.log("Pakistan Won the match");
                        console.log("PAK - Score: " + pakScore + "/" + pakWkts);
                        console.log("------------------");
                        sleep(2000);
                        return;
                    }
                }


            }
            sleep(2000);
            overs++;

            if (pakWkts !== 10) {

                if(pakScore < indScore){
                console.log("Over # " + overs + " Completed");
                console.log("PAK - Score: " + pakScore + "/" + pakWkts + "------------runrate: " + pakScore/overs);;
                if(checkWeather == "Rainy"){
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("    ///////// Rainy Weather Please Wait //////////")
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    console.log("/ / / / / / / / / / / / / / / / / / / / / / / / / / / ");
                    sleep(5000);

                }
                sleep(1000);
            }

                if(indScore > pakScore){
                    console.log("Pakistan need " + (indScore - pakScore) + " runs to win");
                    console.log("************");
                    sleep(3000);
                }

            }
        }


        if (indScore > pakScore) {
            console.log("------------------");
            console.log(" IND Won the Match ");
            console.log("------------------");
            sleep(2000);
        }else if (pakScore == indScore) {
            console.log("------------------");
            console.log("   Match Tied");
            console.log("------------------");
            sleep(2000);
        }

    }
    
}

cricket();