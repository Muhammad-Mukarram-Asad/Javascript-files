/*
Create a game that will have characters. Ask user to type any one of the name, if the name not found. Tell user it's invalid. Let the player1's character name is that user typed.
And select any player randomly for player2 from the following
var characters = '‘Ken', ‘Ryu', ‘Ehonda', ‘Blanka']
*/

function player_1() {
  var characters = ["Ken", "Ryu", "Ehonda", "Blanka"];
  var flag = 1;
  var user_name = prompt(" Enter the name of the character: ");
  while (flag) {
    for (var i = 0; i < characters.length; i++)
     {
      if (user_name === characters[i])
       {
        flag = 0;
        return user_name;
      }
    }
    if (flag == 0) {
      break;
    } 
    
    else {
      user_name = prompt(" Plz give correct character name:");
    }
  }
}

// player_1();

function player_2() {
  // var characters = ["Ken", "Ryu", "Ehonda", "Blanka"];

  // var cpu_player = characters[Math.floor(Math.random() * characters.length)];
  // return cpu_player;

  var characters = ["Ken", "Ryu", "Ehonda", "Blanka"];
  var flag = 1;
  var user_name = prompt(" Enter the name of the character: ");
  while (flag) {
    for (var i = 0; i < characters.length; i++)
     {
      if (user_name === characters[i])
       {
        flag = 0;
        return user_name;
      }
    }
    if (flag == 0) {
      break;
    } 
    
    else {
      user_name = prompt(" Plz give correct character name:");
    }
  }
}


var user_player_name = player_1();
var cpu_player_name = player_2();
console.log(" The user player name is = " + user_player_name);
console.log(" The cpu player name is = " + cpu_player_name);

/*
Create a function that will return any random action from the followings:
var actions= '‘punch', ‘kick', ‘jump', ‘special attack']
Kick & Punch has 10 points
Jump has 0 points. If any one jump, no player will hurt on anyone's attack.
Special attack has 25 points

Create a game function that will use the above things and should do a fight between 
2 players. Each player has 100% health. The game should run until any player’s health 
decrease to 0. Show the name and character name of the player won! E.g. “Player 2 Ken
 wins!”

*/

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function part_2() {

  var user_player_health = 100;
  var cpu_player_health = 100;

  var flag = true;
  
  while(flag) 
  {
    var actions = ["punch", "kick", "special attack"];
    var user_player_action = actions[Math.floor(Math.random() * actions.length)];
    var cpu_player_action = actions[Math.floor(Math.random() * actions.length)];

    alert(user_player_name + " action is = " +  user_player_action);
    alert(cpu_player_name + " action is = " + cpu_player_action);

    sleep(1000);

    
    // If user player performs kick then: 
    
    if ( (user_player_action == "kick") && ( cpu_player_action == "kick") ) {
      user_player_health -= 10;
      cpu_player_health -= 10;

      console.log(user_player_name + " kicks " + cpu_player_name + " !!!");
      console.log(cpu_player_name + " performs " + cpu_player_action + " on " + user_player_name + " !!! ");

      sleep(2000);

      console.log(" \n \n #####  Health Update: ##### \n \n");


      console.log(" The health of " + user_player_name + " is = " + user_player_health);
      console.log(" The health of " + cpu_player_name + " is = " + cpu_player_health);

      if( (user_player_health <=0)  || (cpu_player_health <= 0) )
        {
          flag = false;
    
          if(flag == false)
          {
            break;
          } 
        }
        console.log(" \n \n !!!!!  Next actions of both the players are : \n \n ")
    }

    

    // If cpu player perfroms kick then: 

    // if ( (cpu_player_action == "kick") && ( (user_player_action == "punch") )) {
    //   user_player_health -= 10;
    //   cpu_player_health -= 10;

    //   console.log(cpu_player_name + " kicks " + user_player_name + " !!!");
    //   console.log(user_player_name + " performs " + user_player_action + " on " + cpu_player_name + " !!! ");

    //   sleep(2000);

    //   console.log(" \n \n #####  Health Update: ##### \n \n");


    //   console.log(" The health of " + user_player_name + " is = " + user_player_health);
    //   console.log(" The health of " + cpu_player_name + " is = " + cpu_player_health);

    //   if( (user_player_health <=0)  || (cpu_player_health <= 0) )
    //     {
    //       flag = false;
    
    //       if(flag == false)
    //       {
    //         break;
    //       } 
    //     }
    //     console.log(" \n \n !!!!!  Next actions of both the players are : \n \n ");
    // }

    
    // If user player performs punch then: 


    if ( ( (user_player_action == "punch") && (cpu_player_action == "kick")) 
                                ||
          ( (user_player_action == "kick") && (cpu_player_action == "punch")) )
    {
      
      user_player_health -= 10;
      cpu_player_health -= 10;

      console.log(user_player_name + " punches " + cpu_player_name + " !!!");
      console.log(cpu_player_name + " performs " + cpu_player_action + " on " + user_player_name + " !!! ");

      sleep(2000);

      console.log(" \n \n #####  Health Update: ##### \n \n");


      console.log(" The health of " + user_player_name + " is = " + user_player_health);
      console.log(" The health of " + cpu_player_name + " is = " + cpu_player_health);

      if( (user_player_health <=0)  || (cpu_player_health <= 0) )
      {
        flag = false;
  
        if(flag == false)
        {
          break;
        } 
      }
      console.log(" \n \n !!!!!  Next actions of both the players are : \n \n ")

    }

     
    // If cpu player performs punch then:
    
    if ( (cpu_player_action == "punch") && ( (user_player_action == "punch") ) ) 
    {
      
      user_player_health -= 10;
      cpu_player_health -= 10;

      console.log(user_player_name +" performs " + user_player_action + " on " + cpu_player_name + " !!!");
      console.log(cpu_player_name + " punches " + user_player_name + " !!! ");

      sleep(2000);

      console.log(" \n \n #####  Health Update: ##### \n \n");


      console.log(" The health of " + user_player_name + " is = " + user_player_health);
      console.log(" The health of " + cpu_player_name + " is = " + cpu_player_health);

      if( (user_player_health <=0)  || (cpu_player_health <= 0) )
      {
        flag = false;
  
        if(flag == false)
        {
          break;
        } 
      }
      console.log(" \n \n !!!!!  Next actions of both the players are : \n \n ")

    }

    
    // if user player performs special attack:

    if( ( user_player_action == "special attack") &&
    (cpu_player_action == "kick" || cpu_player_action == "punch") ) 

    {
      cpu_player_health -= 25;

      console.log(user_player_name + " performs special attack on  " + cpu_player_name + " !!!");
      console.log(cpu_player_name + " performs " +  cpu_player_action + " on " + user_player_name + " !!! ");

      sleep(2000);

      console.log(" \n \n #####  Health Update: ##### \n \n");


      console.log(" The health of " + user_player_name + " is = " + user_player_health);
      console.log(" The health of " + cpu_player_name + " is = " + cpu_player_health);

      if( (user_player_health <=0)  || (cpu_player_health <= 0) )
      {
        flag = false;
  
        if(flag == false)
        {
          break;
        } 
      }
      console.log(" \n \n !!!!!  Next actions of both the players are : \n \n ")

    }

    
    // If cpu player perfroms special attack :

    if (
      (cpu_player_action == "special attack") &&
      ((user_player_action == "kick") || (user_player_action == "punch")) ) 
    {
      user_player_health -= 25;
    

      console.log(cpu_player_name + " performs special attack on  " + user_player_name + " !!!");
      console.log(user_player_name + " performs " +  user_player_action + " on " + cpu_player_name + " !!! ");

      sleep(2000);

      console.log(" \n \n #####  Health Update: ##### \n \n");


      console.log(" The health of " + user_player_name + " is = " + user_player_health);
      console.log(" The health of " + cpu_player_name + " is = " + cpu_player_health);

      if( (user_player_health <=0)  || (cpu_player_health <= 0) )
      {
        flag = false;
  
        if(flag == false)
        {
          break;
        } 
      }
      console.log(" \n \n !!!!!  Next actions of both the players are : \n \n ")

    }

      
    // if both the players performs special attack on each other.

    if( ( user_player_action == "special attack")  &&
      ( cpu_player_action == "special attack") ) 
      
      {
      user_player_health -= 25;
      cpu_player_health -= 25;

      console.log(user_player_name + " performs special attack on  " + cpu_player_name + " !!!");
      console.log(cpu_player_name + " also perform special attack on " + user_player_name + " !!! ");

      sleep(2000);

      console.log(" \n \n #####  Health Update: ##### \n \n");


      console.log(" The health of " + user_player_name + " is = " + user_player_health);
      console.log(" The health of " + cpu_player_name + " is = " + cpu_player_health);

      if( (user_player_health <=0)  || (cpu_player_health <= 0) )
      {
        flag = false;
  
        if(flag == false)
        {
          break;
        } 
      }
      console.log(" \n \n !!!!!  Next actions of both the players are : \n \n ")

    }


      
    // if cpu player performs jump against any action of user player then:

    // if ( (user_player_action == "kick") || (user_player_action == "punch") ||
    //     (user_player_action == "special attack") &&
    //     ( cpu_player_action == "jump")) 
    // {
    //   user_player_health -= 0;
    //   cpu_player_health -= 0;

    //   console.log(user_player_name + " performs " + user_player_action + " on " + cpu_player_name + " !!!");
    //   console.log(cpu_player_name + " performs jump. That's a well move againt " +  user_player_name);

    //   sleep(2000);

    //   console.log(" \n \n #####  Health Update: ##### \n \n");


    //   console.log(" The health of " + user_player_name + " is = " + user_player_health);
    //   console.log(" The health of " + cpu_player_name + " is = " + cpu_player_health);

    //   if( (user_player_health <=0)  || (cpu_player_health <= 0) )
    //   {
    //     flag = false;
  
    //     if(flag == false)
    //     {
    //       break;
    //     } 
    //   }
    //   console.log(" \n \n !!!!!  Next actions of both the players are : \n \n ")

    // }

        // if user player performs jump against any action of cpu player then:

    // if ( (cpu_player_action == "kick" ) || (cpu_player_action == "punch") ||
    //     (cpu_player_action == "special attack") &&
    //     ( user_player_action == "jump") ) 
    
    // {
    //   user_player_health -= 0;
    //   cpu_player_health -= 0;

    //   console.log(user_player_name + " performs jump. That's a well move againt " +  cpu_player_name);
    //   console.log(cpu_player_name + " performs " + cpu_player_action + " on " + user_player_name + " !!!");

    //   console.log(" \n \n #####  Health Update: ##### \n \n");

    //   sleep(2000);
    //   console.log(" The health of " + user_player_name + " is = " + user_player_health);
    //   console.log(" The health of " + cpu_player_name + " is = " + cpu_player_health);

    //   if( (user_player_health <=0)  || (cpu_player_health <= 0) )
    //   {
    //     flag = false;
  
    //     if(flag == false)
    //     {
    //       break;
    //     } 
    //   }
    //   console.log(" \n \n !!!!!  Next actions of both the players are : \n \n ")
    // }

  } // while loop finishes here.

  if(user_player_health > cpu_player_health)
      {
        console.log(" Congratulations!!! " + user_player_name + " You won the match against " + cpu_player_name);

      }
    else if(user_player_health == cpu_player_health) {
        console.log(" Match is draw. ");

      }
      else{
        console.log(" Congratulations!!! " + cpu_player_name + " You won the match against " + user_player_name);

      }
}
