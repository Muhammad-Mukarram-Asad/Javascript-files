// Math and Date Methods:


// Question : 01
/*
Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
*/

// CODE : 01

var pos_int = +prompt(" Enter a positive integer:");
alert("The number is = " +pos_int+
" \n The round value is = "+ Math.round(pos_int)+
" \n The floor value is = "+ Math.floor(pos_int)+
" \n The ceil value is = "+  Math.ceil(pos_int)
);

// Question : 02

/*
Write a program that takes a negative integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
*/

// CODE : 02

var neg_int = +prompt(" Enter a negative integer:");
alert("The number is = " +neg_int + 
" \n The round value is = "+ Math.round(neg_int) +
" \n The floor value is = "+ Math.floor(neg_int)+
" \n The ceil value is = "+  Math.ceil(neg_int)
);

// Question : 03

/*
Write a program that takes a positive floating point number
from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
*/

// CODE: 03

var floating = +prompt(" Enter a floating point integer:");
alert("The number is = " +floating + 
" \n The round value is = "+ Math.round(floating) +
" \n The floor value is = "+ Math.floor(floating)+
" \n The ceil value is = "+  Math.ceil(floating)
);

// Question: 04

/*
Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
*/

// CODE: 04

var neg_floating = +prompt(" Enter a floating point integer:");
alert("The number is = " +neg_floating + 
" \n The round value is = "+ Math.round(neg_floating) +
" \n The floor value is = "+ Math.floor(neg_floating)+
" \n The ceil value is = "+  Math.ceil(neg_floating)
);

// Question : 05

/*
Write a program that displays the absolute value of a number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5
*/

// CODE: 05

var num = +prompt(" Enter a number for displaying absolute number:");
alert("The absolute number of the above given number is = "+ Math.abs(num));

// Question: 06

/*
Write a program that simulates a dice using random() method
of JS Math class. Display the value of dice in your browser.
*/

// CODE: 06

alert(" The random dice value is = " + Math.floor(Math.random()*6));

// Question: 07

/*
Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser.
*/

// CODE: 07
var value = Math.floor(1 + ((2-1)+1) *Math.random());
alert(" The random coin value is = " + value);
if(value == 0)
{
    alert(" Random coin value is = Heads.")
}
else{
    alert(" Random coin value is = Tails.")

}


// Question : 08

/*
Write a program that shows a random number between 1 and
100 in your browser.
*/

// CODE: 08
alert(" The random number between 1 and 100 is = " + 1 + ((100 - 1)+1) * Math.random());

// Question : 09

/*
Write a program that asks the user about his weight. Parse the
user input and display his weight in your browser. Possible user
inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms
*/

// CODE: 09

var weight = prompt("Plz enter your weight");
if(weight.endsWith("kgs") || weight.endsWith("kilograms") )
{
    alert(" The weight of the user is = " + weight);

}
else{
    alert(" I think you did a mistake in typing your weight like you may missed the unit of your weight.");

}

// Question: 10

/*
Write a program that stores a random secret number from 1
to 10 in a variable. Ask the user to input a number between 1
and 10. If the user input equals the secret number, congratulate
the user.
*/

// CODE: 10

var secret_number = 1 + ((10-1)+1)* Math.random();
var input_number = +prompt(" Enter a number between 1 & 10:");
if(secret_number == input_number)
{
    alert(" Congratulations, your guess is absolutely right.");
}
else{
    alert(" Nopes, your guess is absolutely wrong.")
}

// Question : 11

/*
Write a program that displays current date and time in your
browser.
*/

// CODE: 11

var date = new Date();
var a = date.toLocaleDateString();
var b = date.toLocaleTimeString();
alert(date);
alert(a);
alert(b);

// Question: 12

/*
Write a program that alerts the current month in words. For
example December.
*/

// CODE: 12

var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var monthName=months[d.getMonth()]; 
alert(" The current month is = " + monthName);

// Question: 13

/*
Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show Sun.
*/

// CODE: 13

var date = new Date();
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
alert(days[date.getDay()]);

// Question : 14

/*
Write a program that displays a message “It’s Fun day” if its
Saturday or Sunday today.
*/

// CODE: 14
var date = new Date();
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
if(days[date.getDay()] == "Sat" || days[date.getDay()] == "Sun")
{
    alert(" Its fun day guys.");
}
else{
    alert(" Its a normal week day.");
}

// Question : 15

/*
Write a program that shows the message “First fifteen days of the
month” if the date is less than 16th of the month else shows “Last
days of the month”.
*/

// CODE: 15

var d = new Date();
var a = d.getDate();
if(a > 16)
{
    alert(" Last days of the month.")
}
else
{
    alert(" First fifteen days of the month.");
}

// Question: 16

/*
Write a program that determines the minutes since midnight, Jan.
1, 1970 and assigns it to a variable that hasn't been declared
beforehand. Use any variable you like to represent the Date object.
*/

// CODE: 16

var date = new Date();
var specified_date = new Date('Jan-1-1970');

var D = date.getTime();
var total_elapsed_minutes = Math.ceil( (D / 1000/60));
var total_elapsed_hours = Math.ceil( (D / 1000/3600));


alert(" Current date is = " + date);
alert(" The total number of elapsed minutes from the current date to the 1 january 1970" +
 " are = " + total_elapsed_minutes);

alert(" The total number of elapsed hours from the current date to the 1 january 1970" +
 " are = " + total_elapsed_hours);



// Question: 17

/*
Write a program that tests whether it's before noon and alert “Its
AM” else “its PM”.
*/

// CODE : 17

var date = new Date();
if (date.getHours() >= 12) {
    alert("It's PM")
} else {
    alert("It's AM")
}

// Question: 18

/*
Write a program that creates a Date object for the last day of the
last month of 2020 and assigns it to variable named laterDate
*/

// CODE: 18

var laterDate = new Date('Dec 31, 2020');
alert(laterDate);

// Question : 19

/*
Create a date object of the starting date of this Ramadan and alert
the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015
*/

// CODE: 19

let date_1 = new Date('5/2/2022'); 
let date_2 = new Date();
let difference = date_2. getTime() - date_1. getTime();
let TotalDays = Math. ceil(difference / (1000 * 3600 * 24)); 
console.log(" The total number of days passed from ramadan till now are = " +TotalDays);


// Question : 20

/*
Write a program that displays in your browser the seconds that
elapsed between the reference date and the beginning of 2015.
*/

// CODE: 20

var date = new Date();
var specified_date = new Date('1/1/2015');

var D = date.getTime() - specified_date.getTime();
var total_elapsed_seconds = Math.ceil( (D / 1000));
alert(" The total number of elapsed seconds from the current date to the beginning of" +
 " the year 2015 are = " + total_elapsed_seconds);

// Question : 21

/*
Create a Date object for the current date and time. Extract the
hours, reset the date object an hour ahead and finally display the
date object in your browser.
*/

// CODE: 21

var date = new Date();
alert(date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear() + " Hours = " + date.getHours()  );
var set_hrs = date.getHours()-1;
date.setDate( date.getDate());
date.setFullYear( date.getFullYear() );
alert((date.getMonth() ) + '/' + (date.getDate()) + '/' + (date.getFullYear()) + " Hours = " + set_hrs);


// Question : 22

/*
Write a program that creates a date object and show the date
in an alert box that is reset to 100 years back?
*/

// CODE: 22

var date = new Date();
alert(date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear());
date.setDate( date.getDate());
date.setFullYear( date.getFullYear() - 100 );
alert((date.getMonth() ) + '/' + (date.getDate()) + '/' + (date.getFullYear()));


// Question : 23

/*
Write a program to ask the user about his age. Calculate and
show his birth year in your browser.
*/

// CODE: 23

var user_dob = prompt(" Plz enter your age:");

var date = new Date();
var current_year = date.getFullYear();

alert(" The birth year of the user is = " + (current_year - user_dob));


// Question : 24

/*
Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2 decimal
places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)

Where,
Net Amount Payable (within Due Date) = Number of units * Charges per unit &
Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
*/

// CODE: 24

var Customer_Name = prompt(" Enter your name plz: ");
var Current_Month = prompt(" Enter month name plz: ");
var No_Units = prompt(" Enter your number of units: ");
var charges_unit = prompt(" The charges per unit is = ");
var late_payment_charges = +prompt(" Please also enter late payment charges:");

var due_date = prompt(" Enter due date in dd-mm-yyyy:");

var current_date = new Date('10-June-2022');

if(current_date.getDate() < due_date.getDate())
{
    alert(" So you are paying your electricity bill within due date" +
    " and your net payment is = " + Math.round( (No_Units * charges_unit)).toFixed(2) );
}

else
{
    alert(" So you are paying your electricity bill after due date" +
    " and your gross payment is = " + Math.round( (No_Units * charges_unit)+ late_payment_charges ) );

}







