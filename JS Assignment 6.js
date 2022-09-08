// Question: 01

/*
Write a program that takes two user inputs for first and last
name using prompt and merge them in a new variable titled
fullName. Greet the user using his full name.
*/

// CODE: 01

var first = "Muhammad";
var last = " Mukarram Asad";
var full = first + last;
console.log(" So the full name of yours is " + full);

// Question: 02

/*
Write a program to take a user input about his favorite mobile
phone model. Find and display the length of user input in your
browser.
*/

// CODE: 02

var mobile_model = prompt(" Enter your favourite mobile model completely: ");
alert(
  " The favourite mobile model of your's is = " +
    mobile_model +
    " \n and the length is = " +
    mobile_model.length
);

// Question: 03

/*
Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser.
*/

// CODE: 03
var word = "Pakistani";
alert(
  " The index number of 'n' in the word Pakistani is = " + word.indexOf("n")
);

// Question: 04

/*
Write a program to find the last index of letter “l” in the word
“Hello World” and display the result in your browser.
*/

// CODE : 04

var word_1 = "Hello World";
alert(
  " The last index number of 'l' in the word ' hello world'  is = " +
    word_1.lastIndexOf("l")
);

// Question : 05

/*
Write a program to find the character at 3rd index in the word
“Pakistani” and display the result in your browser.
*/

// CODE: 05

var word_2 = "Pakistani";
alert(" The character at index number 3 is = " + word_2.charAt(3));

// Question: 06

/*
Repeat Q1 using string concat() method.
*/

// CODE: 06

var full_2 = first.concat(last);
alert("So the full name of yours is " + full_2);

// Question: 07

/*
Write a program to replace the “Hyder” to “Islam” in the word
“Hyderabad” and display the result in your browser.
*/

// CODE: 07

var word_3 = " Hyderabad";
console.log(word_3);
console.log(word_3.replace("Hyder", "Islam"));

// Question: 08

/*
Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser. 
var message = “Ali and Sami are best friends. They play cricket and football together.”;
*/

// CODE: 08

var message =
  "Ali and Sami are best friends. They play cricket and football together.";
console.log(message.replaceAll("and", "&"));

// Another method:

var message ="Ali and Sami are best friends. They play cricket and football together.";
for(var i = 0 ; i<message.length ; i++)
{
    if(message.slice(i, i+3) == "and")
    {
        var first_part = message.slice(0, i);
        var changing_part = "&";
        var last_part = message.slice(i+3);
        message =  first_part + changing_part + last_part;
    }

}
console.log(message);
// Another method:

var str = "Ali and babar are best friends and they both play cricket.";
var str_array = str.split(" ");
console.log(str_array);

for(var i = 0 ; i<str_array.length ; i++)
{
    if(str_array[i] == "and")
    {
        str_array[i] = "&";
    }
}
str = str_array.join(" ");
console.log(str);


// Question : 09

/*
Write a program that converts a string “472” to a number 472.
Display the values & types in your browser.
*/

// CODE: 09
var s = "472";
var n = Number(s);
console.log(typeof s);
console.log(typeof n);

// Question: 10

/*
Write a program that take a URL as user input in the
following format: (www.facebook.com / www.yahoo.com ).
Extract the domain name & show in your browser.
*/

// CODE : 10

var url = prompt(" Enter any url of a website: ");
console.log(" The domain of the given url is = " + url.slice(4, 16));

// Another method:

var website = " www.youtube.com";
website.slice(website.indexOf(".")) // .youtube.com
website.slice(website.indexOf(".")+1)  // youtube.com

// Question : 11

/*
Write a program that takes user input. Convert and show the
input in capital letters.
*/

// CODE: 11

var str_input = prompt(" Enter any string in lowercase:");
alert(" The upper case of the above string is = " + str_input.toUpperCase());

// Question : 12

/*
Write a program that takes user input. Convert and show the
input in small letters.
*/

// CODE: 12

var str_input = prompt(" Enter any string in uppercase:");
alert(" The lower case of the above string is = " + str_input.toLowerCase());

// Question : 13

/*
Write a program that takes user input. Convert and show the
input in title case.
*/

// CODE: 13

var str_input = prompt(" Enter any string in lowercase:");
// There is no direct method of converting a string into capital case. so for that,
// we have to use the folllowing methods together.
var a = str_input.charAt(0).toUpperCase(); 
var result = "";
alert("The capital case of the above string is = " + (result += a + str_input.slice(1)));

// Questin: 14

/*
Write a program that converts the variable num to string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser.
*/

// CODE: 14

var num = "35.36";
console.log(num.replace(".", ""));

// Question : 15

/*
Write a program to display the value of x in your browser if a=”3”
and b=”3”?
*/

// code: 15

var a = "3";
var b = "3";
var c = a + b;
console.log(" The value of a+b is = " + c);

// Question : 16

/*
Write a program to display the value of y in your browser if a=”3”
and b=”3”?
y = a - b;
*/

// code: 16

var a = "3";
var b = "3";
var c = a - b;
console.log(" The value of a-b is = " + c);

// Question : 17

/*
Write a program to take user input and store username in a
variable. If the username contains any special symbol among
[@ . , !], prompt the user to enter a valid username. For
character codes of [@ . , !], refer to ASCII table at the end of
this document.
Note:
ASCII code of ! is 33
ASCII code of , is 44
ASCII code of . is 46
ASCII code of @ is 64
*/

// code: 17

var user_inp = prompt(" Enter your valid name please:");
 var has_num = false;
for (var i = 0; i < user_inp.length; i++) {
  if( (!(isNaN(user_inp[i]))) || (user_inp[i].charCodeAt >=1 && user_inp[i].charCodeAt <=64 ) )
  {
    has_num = true;
  }
}
if(has_num == true)
{
  alert(" Not a valid username b/c it contains characters which are not pure alphabets. \n " + 
  " The entered user name is = " + user_inp);
}
else
{
  for (var i = 0; i < user_inp.length; i++) {
  if ( (user_inp.charCodeAt(i) >= 65 && user_inp.charCodeAt(i) <= 90 ) || 
  (user_inp.charCodeAt(i) >= 97 && user_inp.charCodeAt(i) <= 122) )
  {
    alert(" Good One! Your name is valid.");
    break;
  } 
   else {
    alert(" Plz enter a valid user name.");
    break;
  }
}
}
// Question : 18

/*
You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an array.
After searching, prompt the user whether the given item is
found in the list or not.
Note: Perform case insensitive search. Whether the user enters
cookie, Cookie, COOKIE or coOkIE, program should inform
about its availability.
*/

// code: 18

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var flag = 0;

var user_input = prompt(
  " Enter the name of the item which you want from our bakery:"
);
for (var i = 0; i < A.length; i++) {
  if (A[i].includes(user_input)) {
    alert(
      user_input + " is available at index number " + i + " in our bakery."
    );
    flag += 1;
  }
}
if (flag == 0) {
  alert(user_input + " is not available in our bakery.");
}

// Question : 19

/*
Write a program to take two input strings. Using string
comparison, tell which string is greater than other or if they
both are equal.
*/

// CODE: 19

var str_1 = prompt(" Enter string number one for string comparison:");
var str_2 = prompt(" Enter string number two for string comparison:");

if (str_1 > str_2) {
  alert(str_1 + " is greater than " + str_2);
} else if (str_2 > str_1) {
  alert(str_2 + " is greater than " + str_1);
} else {
  alert(str_1 + " and " + str_2 + " both are equal.");
}

// Question: 20

/*
Write a program to take password as an input from user. The
password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document.
*/

// CODE: 20

var inp_password = prompt(" Plz enter a strong password for your account");
for (var i = 0; i < inp_password.length; i++) 
{
 if(!(isNaN(inp_password[0])))
 {
  console.log(" Entered password is = " + inp_password  + "\n" +
  " Password shouldn't start with a number. \n  Plz enter valid password.")
  break;
 } 
 else if(inp_password.length < 6)
 {
  console.log(" The length of the password should greater than 6. \n " +
  " Plz enter valid password. " );
  break;
 }
 else{
  var has_Number = false;

  for(var i = 0 ; i<inp_password.length ; i++)
  {
    if(inp_password[i].charCodeAt() >= 48 && inp_password[i].charCodeAt() <=57 )
    {
      has_Number = true;
    }
  }
  if(has_Number == true)
  {
    console.log("valid password.");
  }
  else{
    console.log(" Entered password is = " + inp_password + " \n " +
    " Passowrd must contain numbers. \n  Plz enter valid password.")
  }
 }
}

// Question: 21

/*
Write a program to convert the following string to an array
using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser.
*/

// CODE: 21

var university = "University of karachi";
var uni_array = university.split();
console.log(uni_array);

for (var i = 0; i < uni_array.length; i++) {
  for (var j = 0; j < uni_array[i].length; j++) {
    console.log(uni_array[i][j]);
  }
}
// Question : 22

/*
Write a program to display the last character of a user input.
*/

// CODE: 22

var inp = prompt(" Enter any thing which you like most: ");
console.log(" The last character of the above given string is = " + inp.charAt(inp.length - 1));

// Question : 23

/*
You have a string “The quick brown fox jumps over the lazy
dog”. Write a program to count number of occurrences of word
“the” in given string.
*/

// CODE: 23

var str = "The quick brown fox jumps over the lazy dog";
var counter = 0;
for(var i = 0 ; i<str.length ; i++)
{
    if( str.slice(i,i+3).toLowerCase() === "the")
    {
        counter+=1;
    }
}
console.log(" The total number of occurrences of the word 'the' is = " + counter);

// Question : 24

/*
Write a program to count number of vowels & consonants in
given string
var str = “Pakistan”;
*/

// CODE; 24

var str = "Pakistan";
var count_vowels = 0;
var count_consonants = 0;
for (var i = 0; i < str.length; i++) {
  if (
    str[i] == "a" ||
    str[i] == "e" ||
    str[i] == "i" ||
    str[i] == "o" ||
    str[i] == "u"
  ) {
    count_vowels++;
  } else {
    count_consonants++;
  }
}
console.log(
  " Vowels = " + count_vowels + " and \n consonants = " + count_consonants
);

// ANother method for doing the above thing:

var str = "Pakistan";
var count_vowels = 0;
var vowels = ['a', 'e','i','o','u'];

for (var i = 0; i < str.length; i++)
{
    for(var j = 0 ; j<vowels.length ; j++)
    {
        if( str[i] === vowels[j])
        {
            count_vowels+=1;
        }
    }
}
console.log(" The total number of vowels in the string " + str + " is = " + count_vowels);
console.log(" The total number of consonants in the string " + str + " is = " + (str.length-count_vowels));

