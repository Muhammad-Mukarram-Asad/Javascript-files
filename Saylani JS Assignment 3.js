// Question:01

/*
Write a program to check whether the given input number is
divisible by 3 or else show a message “Number is not divisible
by 3”.
*/

// CODE: 01

var input = +prompt(
  "Enter a number for checking that either it is divisible by 3 or not: "
);
if (input % 3 == 0) {
  alert("Definitely the entered number " + input + " is divisible by 3.");
} else {
  alert("Sorry, the entered number is not divisible by 3.");
}

// Question:02

/*
Write a program that checks whether the given input is an even
number or an odd number.
*/

// CODE: 02
var input = +prompt(
  "Enter a number for checking that either it is Even or ODD: "
);
if (input % 2 == 0) {
  alert("Definitely the entered number " + input + " is Even.");
} else if (input % 2 == 1) {
  alert("The entered number " + input + " is ODD.");
} else {
  alert("The entered number is neither even nor odd.");
}
// Question:03

/*
Write an if/else statement with the following condition:
If the variable age is greater than 18, output "Old enough",
otherwise output "Too young".
*/

// CODE: 03

var age = +prompt(" Enter the age plz:");
if (age > 18) {
  alert("You are old enough.");
} else {
  alert(" You are too young.");
}

// Question:04

/*
Write a program that prompts the user for their name, and then
displays a special greeting to that person if their name is the
same as yours. If the name entered by the user is anything
other than your name, your code should not produce any
output.
*/

// CODE: 04
var user_name = prompt("Enter your good name plz but in capital-case format: ");
var my_name = "Mukarram";
if (user_name == my_name) {
  alert("As Salam U Alaikum Mr. " + user_name);
} else {
  alert("");
}

// Question:05

/*
Write a program to check whether the given input number is
divisible by 3 or not by using Switch Case statements. Show a
message “Number is not divisible by 3” or “Number is divisible
by 3”.
*/

// CODE: 05
var input = +prompt("Enter a number for checking that either it is divisible by 3 or not: "
);
switch (true) {
    case (input%3==0):
    alert(" The number is divisible by 3.");
    break;
  default:
    alert(" Number is not divisible by 3.");
}

// Question:06

/*
Write a program that takes a character(number or string) in a
variable & checks whether the given input is a number,
uppercase letter or lower case letter. (Hint: ASCII codes:-
A=65, Z=90, a=97, z=122)
*/

// CODE: 06
var number = prompt("Enter a number:");
if (number >= 1 && number <= 64) {
  alert(" You entered a number that is " + number);
} else if (number >= 65 && number <= 90) {
  alert(" You enetered an UpperCase character code.");
} else if (number >= 97 && number <= 122) {
  alert(" You enetered an LowerCase character code.");
} else {
  alert("You entered a number that is " + number);
}

// Question:07

/*
Write a program to create a calculator for +, -, *, /, % using
switch case statements. (number1, number2 and operator will
be input)
*/

// CODE: 07

var num_1 = +prompt(" Enter the first number: ");
var num_2 = +prompt(" Enter the second number: ");
alert("Enter 1 for Addition. \n Enter 2 for Subtraction. \n Enter 3 for Multiplication. \n " +
" Enter 4 for Divition. \n Enter 5 for Modulus.")
var operator = +prompt(" Enter the operator: ");

switch (operator) {
  case 1:
    if (operator == "1") {
      alert("So you want to addition.");
      alert("The SUM of the above two numbers is = " + (num_1 + num_2));
    }
    break;

  case 2:
    if (operator == "2") {
      alert("So you want to subtraction.");
      alert("The difference of the above two numbers is = " + (num_1 - num_2));
    }
    break;
  case 3:
    if (operator == '3') {
      alert("So you want to multiplication.");
      alert("The multiplication of the above two numbers is = " + (num_1 * num_2));
    }
    break;
  case 4:
    if (operator == '4') {
      alert("So you want to division.");
      alert("The division of the above two numbers is = " + (num_1 / num_2));
    }
    break;
   case 5:
    if (operator == '5') {
      alert("So you want to modulus.");
      alert(
        "The modulus of the above two numbers is = " + (num_1 % num_2)
      );
    }
    break;
    default: alert(" Something is wrong at somewhere.");

}

// Question:08

/*
Write a program that takes time as input from user in 24 hours
clock format like: 1900 = 7pm. Implement the following case
using if, else & else if statements
*/

// CODE: 08
var time = prompt(" Enter the time in 24-hours format plz ;ike(12:00): ");
if(time >= '00:00' && time < '12: 00')
{
    alert("Good Morning.");
}
else if(time >='12:00' && time < '17: 00')
{
    alert("Good Afternoon.");
}if(time >= '17:00' && time < '21: 00')
{
    alert("Good Evening.");
}if(time >= '21:00' && time <= '23:59')
{
    alert("Good Night.");
}



// Question:09

/*
Write a program that takes a calendar year in YYYY format in
a variable. Check & notify the user whether it is a leap year or
not.
*/

// CODE: 09

var year = prompt("Enter the year plz only in YYYY format: ");
if(year % 4 == 0 || year % 100 == 0)
{
    alert(" The entered year is Leap Year.");
}
else{
    alert(" The entered year is not a  Leap Year.");

}
// Question: 10

/*
Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then give
message “ Please enter your password”
ii. Check if both passwords are same. If they are same,
show message “Correct! The password you entered
matches the original password”. Show “Incorrect
password” otherwise. */

// CODE: 10

var stored_password = "27May2022";
var input_password = prompt("Plz enter password for validation: ");
if(input_password == "")
{
  alert("Please enter your password.");
}
else if(input_password == stored_password)
{
  alert("Correct password was entered.");
}
else{
  alert("Incorrect password was entered.")
}

// Question: 11

/*
Write a program that adds an else statement to the following
script to display “You are not Fahad”
var firstName = "Ali";
if (firstName === "Fahad") {
document.write("Hello Fahad!");
 */

// CODE: 11
var firstName = "Ali";
if (firstName === "Fahad") 
{
console.log("Hello Fahad!");
}
else{
  console.log("You are not Fahad.");
}

// Question: 12

/*
This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
*/

// CODE: 12
var greeting;
var hour = 13;
if (hour < 18)
{
greeting = "Good day";
alert(greeting);
}
else
{
greeting = "Good evening";
alert(greeting);
}


// Question: 13

/*
Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.
 */

// CODE: 13
var integer_1 = +prompt("Enter the First Integer: ");
var integer_2 = +prompt("Enter the Second Integer: ");
if(integer_1 == integer_2)
{
  alert("Both the above numbers are Equal.");
}
else if(integer_1> integer_2)
{
  alert("The first number that is " + integer_1 + " is greater than second number that is" + integer_2);
}
else{
  alert("The second number that is " + integer_2 + " is greater than first number that is" + integer_1);
}

// Question: 14

/*
Write a program that takes input a number from user & state
whether the number is positive, negative or zero.
 */

// CODE: 14
var input_number = +prompt("Plz enter any number which you like most: ");
if(input_number>0)
{
  alert("Definitely your favourite number is positive.");
}
else if(input_number < 0)
{
  alert("Definitely your favourite number is negative.");

}
else
{
  alert("Definitely your favourite number is zero.");

}

// Question: 15

/*
Ask the user what the current hour is. If the hour is between
6 and 9 a.m., tell the user, "Breakfast is served." If the hour is
between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
the hour is between 5 and 8 p.m., tell the user, "It's dinner
time." For any other hours, tell the user, "Sorry, you'll have to
wait, or go get a snack." (Hint: Store the hour in 24 hours clock
format i.e. 14 for 2pm , 15 for 3pm)
 */

// CODE: 15

var hour = prompt("Input the current hour plz: ");
if(hour>=6 && hour <=9)
{
  alert("Breakfast is served.")
}

else if(hour>=11 && hour <=13)
{
  alert("Time for Lunch.")
}
else if(hour>=17 && hour <=20)
{
  alert("Its dinner time.")
}

else
{
  alert("Sorry, you'll have to wait, or go get a snack.")
}



// Question: 16

/*
Write a program that stores value in a variable & tell whether
the type of that variable is a "number", "string", "boolean" or
“undefined”
 */

// CODE: 16

var value = "Mukarram";
if(value == "True" || value == "False")
{
  alert("Boolen type variable.");
}
if(isNaN(value))
{
  alert("String type variable.");
}
else{
  alert("Number type variable.")
}
if(value == "")
{
  alert("Un-defined variable type.")
}



// Question: 17

/*
Write a program that takes a character (i.e. string of length 1)
and returns true if it is a vowel, false otherwise.
 */

// CODE: 17

var vowel = prompt("Enter a vowel:");
if(vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u')
{
  alert(" You enterd a vowel, thats nice.")
}
else{
  alert("no, you didn't enter a vowel.")
}

// Question: 18

/*
Choose the correct comparison operator to display "true",
when:
10 is NOT equal to 8.
 */

// CODE: 18
alert(10!= 8);


// Question: 19

/*
Use a switch statement to rewrite the following JavaScript
code. Prompt the user for the number of a month rather than
setting it to 8:
 */

// CODE: 19

var month = +prompt("Enter the month number: ");
switch (month)
{
  case 1: alert(" According to the given month number, the month name is January.");break;
  case 2: alert(" According to the given month number, the month name is Febuary.");break;
  case 3: alert(" According to the given month number, the month name is March.");break;
  case 4: alert(" According to the given month number, the month name is April.");break;
  case 5: alert(" According to the given month number, the month name is May.");break;
  case 6: alert(" According to the given month number, the month name is June.");break;
  case 7: alert(" According to the given month number, the month name is July.");break;
  case 8: alert(" According to the given month number, the month name is August.");break;
  case 9: alert(" According to the given month number, the month name is September.");break;
  case 10: alert("According to the given month number, the month name is  October.");break;
  case 11: alert("According to the given month number, the month name is  November.");break;
  case 12: alert("According to the given month number, the month name is  December.");break;
  default: alert("Oops, something is in-valid.");

}

// Question:20

/*
Use a conditional (ternary) operator for this exercise:
If the variable age is a value below 18, the value of the variable 
voteable should be "Too young",
otherwise the value of voteable should be "Old enough".
 */

// CODE: 20
var age = +prompt(" Enter your right age now: ");
if(age < 18 ? alert("Too Young") : alert("Old Enough."));

