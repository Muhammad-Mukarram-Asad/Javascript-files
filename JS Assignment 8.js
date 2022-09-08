// Question: 01

/*
Create a block of code that you can use several times.
*/

// CODE: 01

function arthimetic(a, b) {
  console.log(" The addition of the above numbers is = " + a + b);
  console.log(" The subtraction of the above numbers is = " + a - b);
  console.log(" The multiplication of the above numbers is = " + a * b);
  console.log(" The division of the above numbers is = " + a / b);
}

// Question : 02

/*
Write a function that displays current date &amp; time in your
browser.
*/

// CODE: 02
var d = new Date();
function date() {
  console.log(
    "Date = " +
      d.getDay +
      "/" +
      d.getDate +
      "/" +
      d.getFullYear +
      "Time = " +
      d.getHours +
      ":" +
      d.getMinutes
  );
}

// Question : 3

/*
Write a function that takes first &amp; last name and then it greets
the user using his full name.
*/

// CODE: 3

function greeting(fN, lN) {
  alert(" As Salam u alaikum --> " + fN + " " + lN);
}

// Question : 04

/*
Write a function that adds two numbers (input by user) and
returns the sum of two numbers.
*/

// Code: 04

function SUM(a, b) {
  return a + b;
}
var result = SUM(10, 34);
console.log(result);

// Question : 05

/*
Calculator:
Write a function that takes three arguments num1, num2 &amp;
operator &amp; compute the desired operation. Return and show
the desired result in your browser.
*/

// Code : 05

function calc(num1, num2, op) {
  if (op == "+") {
    console.log(
      " Operator is similar to Addition. \n So the answer is = " + num1 + num2
    );
  } else if (op == "-") {
    console.log(
      " Operator is similar to Subtraction. \n So the answer is = " +
        num1 -
        num2
    );
  } else if (op == "*") {
    console.log(
      " Operator is similar to Multiplication. \n So the answer is = " +
        num1 * num2
    );
  } else if (op == "/") {
    if (num1 > num2) {
      console.log(
        " Operator is similar to Division. \n So the answer is = " + num1 / num2
      );
    } else {
      console.log(
        " Operator is similar to Division. \n So the answer is = " + num2 / num1
      );
    }
  } else if (op == "%") {
    console.log(
      " Operator is similar to remainder. \n So the answer is =  " +
        (num1 % num2)
    );
  } else {
    console.log(
      " I think you entered something wrong. Most probably an operator."
    );
  }
}

// Question : 06

/*
Write a function that squares its argument.
*/

// Code : 06
function square(c) {
  console.log(" The square of the given number is = " + Math.pow(c, 2));
}

// Question : 07

/*
Write a function that computes factorial of a number.
*/

// Code: 07

function factorial() {
  var num = +prompt(" Enter a number plz:");
  var i = 1;
  for (var j = 1; j <= num; j++) {
    i = i * j;
  }
  console.log(i);
}
factorial();

// Question : 08

/*
Write a function that take start and end number as inputs &amp;
display counting in your browser.
*/

// Code : 08

function counting(start, end) {
  for (start; start <= end; start++) {
    console.log(start);
  }
}

// Question : 09

/*
Write a nested function that computes hypotenuse of a right
angle triangle.
Hypotenuse 2 = Base 2 + Perpendicular 2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()
*/

// Code: 09

function calculateHypotenuse(base, perp) {
  var b;
  var p;
  var H;
  function calculateSquare() {
    b = Math.pow(base, 2);
    p = Math.pow(perp, 2);
    return Math.sqrt(Math.pow(base, 2) + Math.pow(perp, 2));
  }
  var H = calculateSquare();

  console.log(" The Hypotenuse of a right angle triangle is = " + H);
}
calculateHypotenuse(4, 3);

// Question : 10

/*
Write a function that writes variable length arguments list in
your browser.
*/

// Code : 10

function length() {
  var a = prompt(" Enter any string:");
  console.log(" The length of the word is = " + a.length);
}

// Question : 11

/*
Write a function that accepts any number of arguments &amp;
find largest of the number.
*/

// Code : 11
function largest() {
  var nums_list = [];

  var t_nums = +prompt(
    " Plz enter the amount that how many numbers you want to give:"
  );
  for (var i = 0; i < t_nums; i++) {
    var numbers = prompt(i + ")" + "Enter a number:");
    nums_list.unshift(numbers);
  }
  console.log(" The largest number is = " + Math.max(...nums_list));
}
largest();

// Question : 12

/*
Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:
a. Arguments as values
b. Arguments as variables
*/

// Code : 12

function Area(width, height) {
  console.log(" The area of the rectangle is given as follows:");
  var Area = width * height;
  console.log(" The area is = " + Area);
}
Area(120, 60);

// Question : 13

/*
Write a function that receives an array &amp; returns the sorted
array.
*/

// Code: 13

function sorted_array(...array) {
  console.log(" The sorted array is given as follows:  \n " + array.sort());
}
sorted_array([1, 3, 5, 4, 6, 8, 7, 9, 12, 10, 11]);

// Question : 14

/*
Write a function that takes numbers array, sums its elements
&amp; returns the sum.
*/

// Code: 14

function sum_array(array) {
  var s = 0;
  console.log(" The array is given as follows:  \n " + array);
  for (var i = 0; i < array.length; i++) {
    s += array[i];
  }
  console.log(" The sum of the elements of the above given array is = " + k);
}
sum_array([1, 3, 5, 4]);

// Question : 15

/*
Execute &amp; monitor the output of following JS program:
var param = function inner() {
return typeof inner;
}
alert(param());
*/

// Code: 15

var param = function inner() {
  return typeof inner;
};
alert(param()); // Answer is Function. Its means ka function bhi ek type hai.

// Question : 16

/*
Write a function that computes power of a number. E.g. 2 3 is
8.
*/

// Code: 16

function power() {
  var input = +prompt(" Enter anumber for computing its cube :");
  console.log(Math.pow(input, 3));
}

// Question : 17
/*

17. Write a function that simulates a dice &amp; returns---+ a random number between 1 to 6.

*/

// Code: 17
function random_dice() {
  alert(
    " The random number which comes after dicing is = " +
      Math.ceil(Math.random() * 6)
  );
}

// Question : 18

/*

Write a JavaScript function that reverse a number.
Example x = 32243;
EXPECTED OUTPUT : 34223

*/

//Code: 18

function reverse_a_number() {
  var res = "";
  var input = prompt("Enter a number:");
  for (var i = input.length - 1; i >= 0; i--) {
    res += input[i];
  }
  console.log(res);
}

// Question : 19
/*
Write a JavaScript function that checks whether a passed
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same
backward as forward, e.g., madam.


*/
//Code: 19

function palindrome() {
  var input_string = prompt(
    " Enter any string for checking either it is palindrome or not:"
  );
  var result = "";

  for (var i = input_string.length - 1; i >= 0; i--) {
    result += input_string[i];
  }

  if (result == input_string) {
    console.log(" 100% Palindrome string.");
  } else {
    console.log(" Sorry, no palindrome.");
  }
}

// Question : 20
/*
Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : &#39;the quick brown fox&#39; 
EXPECTED OUTPUT : &#39;The Quick Brown Fox&#39;

*/
//Code: 20

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length,
    // as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

// Question : 21
/*

Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : &#39;Web Development Tutorial&#39; 
EXPECTED OUTPUT : &#39;Development&#39;
*/

//Code: 21

function longest_word(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = Math.max(splitStr[i].substring(0, str.length));
    splitStr[i].join(" ");
    console.log(splitStr[i]);
  }
}

// Question : 22

/*
Write a JavaScript function that accepts a string as a
parameter and counts the number of vowels within the string.
EXAMPLE STRING : &#39;The quick brown fox&#39; 
EXPECTED OUTPUT : 5

*/

// Code : 22
function count_vowels(input_str) {
  var count = 0;

  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < input_str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (input_str[i] == vowels[j]) {
        count += 1;
      }
    }
  }
  console.log(" The vowels in the above string are = " + count);
}

// Question : 23

/*
Write a JavaScript function which accepts an argument and
returns the type.
Note : There are six possible values that typeof returns: object,
boolean, function, number, string, and undefined.
*/

// Code:23

function type(a) {
  console.log(" The type of the given parameter is = " + typeof a);
}

// Question : 24

/*
Write a JavaScript function to extract unique characters
from a string.
EXAMPLE STRING :
&quot;thequickbrownfoxjumpsoverthelazydog&quot;
EXPECTED OUTPUT : &quot;thequickbrownfxjmpsvlazydg&quot;
*/

// Code: 24

function unique_characters() {
  var text = "thequickbrownfoxjumpsoverthelazydog";

  for (var i = 0; i < text.length; i++) {
    var unique = "";

    for (var j = 0; j < unique.length; j++) {
      var has_unique = false;

      if (example_string[i] == unique[j]) {
        has_unique = true;
      }
    }
    if (!has_unique) {
        unique += text[i];
        console.group(unique);
      }
  }

 
}
unique_characters();

// Another method
function unique_char(str1) {
  var str = str1;
  var uniql = "";
  for (var x = 0; x < str.length; x++) {
    if (uniql.indexOf(str.charAt(x)) == -1) {
      uniql += str[x];
    }
  }
  return uniql;
}
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

// Question : 25

/*
Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number of
occurrences of the specified letter within the string.
Sample arguments : &#39;JSResourceS.com&#39;, &#39;o&#39; 
EXPECTED OUTPUT : 2
*/

// Code : 25

function counts(str1, str2) {
  var count = 0;
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] == str2) {
      count += 1;
    }
  }
  console.log(" The occurrences of the letter " + str2 + " is  = " + count);
}

// Question : 26

/*
The Age Calculator
Forgot how old you are? Calculate it!
 Write a function named calculateAge that:
o takes 2 arguments: birth year, current year.
o calculates the 2 possible ages based on those years.
o outputs the result to the screen like so: &quot;You are either
NN or NN&quot;

 Call the function three times with different sets of values.
 Bonus: Figure out how to get the current year in JavaScript
instead of passing it in.

*/

// Code: 26

function Age_calculator(birth_year) {
  var d = new Date();
  var current_year = d.getFullYear();

  var difference = current_year - birth_year;

  console.log(" You are definitely " + difference + " years old.");
}
Age_calculator(1997);

// Question : 27

/*
The Lifetime Supply Calculator
Ever wonder how much a &quot;lifetime supply&quot; of your favorite snack
is? Wonder no more!
 Write a function named calculateSupply that:
o takes 2 arguments: age, amount per day.
o calculates the amount consumed for rest of the life
(based on a constant max age).
o outputs the result to the screen like so: &quot;You will need
NN to last you until the ripe old age of X&quot;

 Call that function three times, passing in different values
each time.
 Bonus: Accept floating point values for amount per day, and
round the result to a round number.

*/

// Code : 27

function LifetimeSupplyCalculator(age, amount) {
  var snack = prompt(" Enter the name of your favourite snack: ");
  console.log(" The current age is = " + age);
  var max_age = prompt(" Enter the maximum age approx: ");

  var answer = (max_age - age) * amount;

  console.log(
    " You will need " +
      answer +
      snack +
      " to last you untill the ripe old age of " +
      max_age
  );
}

// Question : 28

/*
The Geometrizer
Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
 Pass the radius to the function.
 Calculate the circumference based on the radius, and output
&quot;The circumference is NN;.

Create a function called calcArea:
 Pass the radius to the function.
 Calculate the area based on the radius, and output &quot;The area
is NN&quot;.
*/

// Code: 28

function calculate_circumference(radius) {
  console.log(
    " The circumference of the cirle is = " + (2 * 3.142 * radius).toFixed(3)
  );

  function calculate_area(radius) {
    console.log(
      " The area of the cirle is = " + (3.142 * (radius * radius)).toFixed(3)
    );
  }
}

// Question : 29

/*
        The Temperature Converter
It&#39;s hot out! Let&#39;s make a converter based on the steps here.
Create a function called celsiusToFahrenheit:
 Store a celsius temperature into a variable.
 Convert it to fahrenheit and output &quot;NN°C is NN°F&quot;.

Create a function called fahrenheitToCelsius:
 Now store a fahrenheit temperature into a variable.
 Convert it to celsius and output &quot;NN°F is NN°C.&quot;
*/

// Code : 29

function celsiusToFahrenheit()
{
    var celsius_temp = prompt(" Enter the celsius temperature: ");
    var fahrenheit_temp = (celsius_temp * 1.8) + 32;
    console.log(fahrenheit_temp);
}

function FahrenheitToCelsius()
{
    var fahrenheit_temp = prompt(" Enter the fahrenheit temperature: ");
    var celsius_temp = (fahrenheit_temp - 32) * .5556 
    console.log(celsius_temp);
}

