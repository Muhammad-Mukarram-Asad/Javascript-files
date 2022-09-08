/*
    Question: 11
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.
*/

// CODE : 11
var secret_number = 5;
var input_number = prompt("Enter a number for matching with secret number: ");
if(input_number == secret_number)
{
    alert("Bingo! Correct answer.");
}
else if(input_number == (secret_number-1)  || input_number == (secret_number+1))
{
    alert("Close enough to the correct answer.");
}
else{
    alert("Sorry, your guess is totally different with respect to secret number.");
}

/*
    Question: 12
Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number is
divisible by 3.
*/

// CODE: 12

var number = prompt("Enter a number plz:");
if(number % 3 == 0)
{
    console.log("The input number is definitely divisible by 3.")
}
else{
    console.log("The input number can't be divisible by 3.")
}

/*
   Question: 13
Names & Total scores of two teams are taken as input. Write
a program that shows which team has won the game or show if
there is a tie. (Team A or Team B).
*/

// CODE: 13

var team_1 = prompt("Enter the name of team-1: ");
var team_2 = prompt("Enter the name of team-2: ");
var t1_score = prompt("Enter the score of team-1 plz: ");
var t2_score = prompt("Enter the score of team-2 plz: ");
if(t1_score == t2_score)
{
    console.log("The match is tie due to equal score of both teams.")
}
else if(t1_score > t2_score)
{
    console.log(" team-1 won the match.");
}

else
{
    console.log(" team-2 won the match.");
}

/*
    Question: 14
Take a string, a number and a Boolean in three variables.
Write a program that checks the type of variables & responds
accordingly.
*/

// CODE: 14
var s = prompt("Enter a string: ");
var n = prompt(" Enter a number: ");
var b = prompt("Enter a boolean: ");

if(isNaN(s))
{
    console.log(s + " is a string.");
}
if(isNaN(n))
{
    console.log(n + " is not a number.");
}
else{
    console.log(n + " is a number.");
}

if(b == 'true' || b == 'false')
{
    console.log(b + " is a boolean.");
}

/*
   Question: 15
Write a program that checks whether the given input is an
even number or an odd number.
*/

// CODE: 15

var inp_num = prompt("Enter any number plz: ");
inp_num = Number(inp_num);
if(inp_num % 2 == 0)
{
    console.log("The given input number is Even.");
}
else if(inp_num % 2 == 1){
    console.log("The given input number is ODD.");
}
// {
//     var flag = true;
//     for(var i = 2; i<= inp_num/2 ; i++)
//     {
//         if(inp_num%i == 0)
//         {
//             console.log(inp_num + " is not a prime number.")
//             flag = false;
//             break;
//         }
//     }
//     if(flag == true)
//     {
//         console.log(input_num + " is definitely a Prime number.");
//     }
//     console.log("Okay, Allahafiz.");


/*
     Question: 16
Weather in Karachi nowadays is too cool, write a program
that takes temperature as input and shows a message based on
following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool
*/

// CODE: 16

var WT = prompt("Enter the weather temperature of Karachi: ");
WT = parseInt(WT);
if(WT > 40)
{
    console.log(" It is too hot outside.")
}

else if(WT > 30)
{
    console.log(" The Weather today is Normal.")
}
else if(WT > 20)
{
    console.log(" Today’s Weather is cool.")
}
else if(WT > 10)
{
    console.log(" OMG! Today’s weather is so Cool.")
}
else{
   console.log(" I think its too cold now. plz wear up warm clothes everybody.")
}

/*
    Question: 17
Write a program to create a calculator for +,-,*, / & % using if
statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.
*/

// CODE: 17

var First_Number = prompt("Enter First number: ");
var Second_Number = prompt("Enter Second number: ");
var operation = prompt("Enter the operation symbol plz: ");
First_Number = parseInt(First_Number);
Second_Number = parseInt(Second_Number);

if(operation == "+")
{
    console.log("So you wanted to do addition, that's great.");
    console.log("So the addition of the above given numbers is = " + (First_Number + Second_Number));
}

else if(operation == "-")
{
    console.log("So you wanted to do subtraction, that's great.");
    if(First_Number > Second_Number)
    {

        console.log("So the subtraction of the above given numbers is = " + (First_Number - Second_Number));
    }
    else{
        console.log("So the subtraction of the above given numbers is = " + (Second_Number - First_Number));

    }
}
else if(operation == "*")
{
    console.log("So you wanted to do multiplication, that's great.");
    console.log("So the multiplication of the given numbers is = " + (First_Number * Second_Number));

}

else if(operation == "/")
{
    if(First_Number > Second_Number)
    {
    console.log("So you wanted to do division, that's great.");
    console.log("So the division of the given numbers is = " + (First_Number / Second_Number));
    }
    else{
    console.log("So the division of the given numbers is = " + (Second_Number / First_Number));

    }

}

else if(operation == "%")
{
    console.log("So you wanted to do modulus operation, that's great.");
    if(First_Number > Second_Number)
    {
        console.log("So the modulus of the given numbers is = " + (First_Number % Second_Number));
    }
    else{
        console.log("So the modulus of the given numbers is = " + (Second_Number % First_Number));

    }

}
else{
    console.log(" I think you entered wrong opeartion symbol. plz try again.");
}

/*
     Question: 18
Write a program that takes user input day name. If the day is
Monday, Tuesday, Wednesday, Thursday or Friday, then show
“It’s a week day”. If the day is Saturday then show “It’s
weekend”. If the day is Sunday then show “Yay! It’s a holiday”.

*/

// CODE: 18

var day_name = prompt("Enter the day name plz: ");
if(day_name == " monday" || day_name =="Monday")
{
    console.log("It's a week day.");
}
else if(day_name == " tuesday" || day_name =="Tuesday")
{
    console.log("It's a week day.");
}
else if(day_name == " wednesday" || day_name =="Wednesday")
{
    console.log("It's a week day.");
}else if(day_name == " thursday" || day_name =="Thursday")
{
    console.log("It's a week day.");
}else if(day_name == " friday" || day_name =="Friday")
{
    console.log("It's a week day.");
}
else if(day_name == " saturday" || day_name =="Saturday")
{
    console.log("It's weekend.");
}
else if(day_name == " sunday" || day_name =="Sunday")
{
    console.log("It's a week day.");
}
else{
    console.log(" Chal beta so ja ja ka.");
}

/*

    Question: 19
Write a program that takes input user’s score, if it’s greater
than 50, say “You are passed”. Otherwise, show “Try again!”
*/

// CODE: 19

var input_user_score = prompt("Enter user score plz: ");
input_user_score = Number(input_user_score);
if(input_user_score > 50)
{
    alert(" You are passed.");
}
else{
    alert("Try again!");
}

/*

    Question: 20
Write a program that:
a. takes 2 numbers.
b. tells whichever number is the greater (higher) number.
c. tells if they are equal
Show the output to make sure it works (e.g. "The greater
number of 5 and 10 is 10.").
*/

// CODE: 20

var number_1 = prompt(" Enter a number-1: ");
var number_2 = prompt(" Enter a number-2: ");
number_1 = Number(number_1);
number_2 = Number(number_2);


if(number_1 > number_2)
{
    console.log("The greater number b/w " + number_1 + " and " + number_2 + " is " + number_1);
}

else if(number_2 > number_1)
{
    console.log("The greater number b/w " + number_1 + " and " + number_2 + " is " + number_2);
}
else{
    console.log("Both the numbers are equal.");
}

/*
   Question: 21
The Translator:
Write a program that:
a. takes 1 input, a language code (e.g. "es", "de", "en")
b. tells "Hello, World" for the given language, for atleast 3
languages. It should default to returning English.
(Hint: use translate.google.com to check the translation of
hello world in different languages)

Show the result to make sure it works.

*/

// CODE: 21

var lang_code = prompt(" Enter a language code plz: ");
if(lang_code == "en" || lang_code == "")
{
    console.log("Hello World.");
}
else if(lang_code == "ur")
{
    console.log("ہیلو ورلڈ  (Urdu) ");
}

else if(lang_code == "ar")
{
    console.log(" مرحبا بالعالم (Arabic). ");
}

else if(lang_code == "zh")
{
    console.log(" 你好世界 (Chinese). ");
}
else{
    console.log("Selam Dünya (Turkish). ")
}
/*
    Question: 22
Write a program to take input a number & tell whether it’s a
positive or negative number.
*/

// CODE: 22

var n = prompt(" Enter a number for checking: ");
if(n> 0)
{
    console.log("The number is definitely a positive number.")
}
else{
    console.log("The given number is surely a negative number.");
}

/*
   Question: 23
The Pluralizer: Write a program that:
a. takes 2 inputs, a noun and a number.
b. tells the number and pluralized form, like "5 cats" or "1
dog".
Run the program for a few different inputs and show the result
to make sure it works.

*/

// CODE: 23

var noun = prompt("Enter a noun plz: ");
var digit = prompt("Enter a number plz: ");
digit = Number(digit);

console.log(" The output is = " + digit + " " + noun);












