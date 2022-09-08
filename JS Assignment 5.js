// Question : 01

/*
Write a program to display the message 'Hello World' 5 times
in your browser using for loop.
*/

// CODE:01

var a = "Hello World";
for(var i = 1 ; i<=5 ; i++)
{
    console.log(i + ') ' +  a);
}

// Question : 02

/*
Write a program to print numeric counting from 1 to 10.
*/

// CODE:02

for(var i = 1 ; i<=10 ; i++)
{
    console.log(i);
}

// Question : 03

/*
Write a program to print multiplication table of any number
using for loop. Table number & length should be taken as an
input from user.
*/

// CODE: 03

var table_length = +prompt("Enter the table length: ");
var table_number = +prompt("Enter the table number: ");

for(var i = 1 ; i<=table_length ; i++)
{
    console.timeLog(table_number + ' x ' + i + ' = ' + (table_number*i));
}

// Question : 04

/*
You have an array
A = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei']
Write each element on new line with the help of for loop.
*/

// CODE: 04

var A = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei'];
for(var i = 0 ; i<A.length ; i++)
{
     console.log(A[i]);
}

// Question : 05

/*
Write a program to print items of the following array using for
loop:
fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
*/

// CODE : 05

fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for(var i  = 0 ; i<fruits.length ; i++)
{
    console.log("Element at index " + i + ' is = ' + fruits[i]);
}

// Question : 06

/*
Write a program to initialize an array of N items by using
prompt. Where N is number of items as entered by the user.
*/

// CODE:06

var N = prompt("Enter the array length for entering the elements in it:");
for(var i = 0 ; i<N ; i++)
{
    var input = prompt(" Enter the element at index " + i + " ");
    console.log(input);
}

// Question : 07

/*
Generate the following series in your browser. See example
output.

a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

*/

// CODE:07

// a) Counting:
for(var i = 1 ; i<=15 ; i++)
{
    console.log(i + " ");
}

// b) Reverse Counting:
for(var i = 10 ; i>0 ; i--)
{
    console.log(i + " ");
}

// c) Even:
for(var i = 0  ; i<=20 ; i+=2)
{
    console.log(i + " ");
}

// d) Odd:
for(var i = 1 ; i<=20 ; i+=2)
{
    console.log(i + " ");
}

// e) Sequence:
for(var i = 2000  ; i<=20000 ; i+=2000)
{
    console.log(i + "");
}

// Question : 08

/*
You have an array
A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
Write a program to enable 'search by user input' in an array.
After searching, prompt the user whether the given item is
found in the list or not.
*/

// CODE : 08

items_array = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

var input = prompt("Enter the  thing: ");
for(var i = 0 ; i<items_array.length ; i++)
{
    if(items_array.includes(input))
    {
        console.log("The " + input + " is available at index number " + items_array.indexOf(input) + " in our bakery.");
        break;
        
    }
    else{
        console.log("Sorry! " + input + " is not available at the moment.");
        break;
    }
}

// Question: 09
/*
Write a program to identify the largest number in the given
array.
A = [24, 53, 78, 91, 12]
*/

// CODE: 09

var A = [24, 53, 78, 91, 12];
console.log("The largest number in the array " + A + " is = " + Math.max(A));

// Question: 10
/*

Write a program to identify the smallest number in the given
array.
A = [24, 53, 78, 91, 12]
*/

// CODE: 10
var A = [24, 53, 78, 91, 12];
console.log("The smallest number in the array " + A + " is = " + Math.min(A));

// Question: 11

/*
Write a program to identify the largest & the smallest
number in the given array.
A = [24, 53, 78, 91, 12].
*/

// CODE: 11

var A = [24, 53, 78, 91, 12];
console.log("The smallest number in the array " + A + " is = " + Math.min(A));
console.log("The largest number in the array " + A + " is = " + Math.max(A));

// Question : 12

/*
Write a program to print multiples of 5 ranging 1 to 100
*/

// CODE : 12

for(var i = 1 ; i<=20 ; i++)
{
    console.log(5 + ' x ' + i + ' = ' + (5*i));
}

// Question : 13

/*
You have given the following arrays:
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
*/

// CODE : 13

var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

console.log( "Students" + " " + "Scores")

for(var j = 0 ; j<scores.length ; j++)
    {
        var i = 0;
        console.log(students[i] +" " + scores[j]);
        i++;
        if(i>scores.length-1)
        {
            break;
        }
    }




// Question : 14

/*
Write a program that prints number from start of the array
to desired stop value. Given array:
var scores = [12, 45, 3, 22, 34, 50];
(Hint: take stop value from user)
E.g. if user gives 3 as input value print 12, 45, 3
if user gives 34 as input value print 12, 45, 3, 22, 34
*/

// CODE : 14

var scores = [12,45,3,22,34,50];
console.log("The length of the array is = " + (scores.length));
var input = prompt(" Enter the stopping value for the array: ");
for(var i = 0 ; i<input; i++)
{
    console.log(scores[i]);
}


// Question : 16

/*
Write a program to repeatedly print the value of the variable
num which is input by user. Value should be decreasing by 0.5
each time, as long as x Value remains positive.
*/

// CODE : 16

var num = prompt(" Enter a number plz: ");
for(num ; num>=0 ; num-=0.5)
{
    console.log(num + "\t");
}

// Question: 17

/*
The even/odd reporter
Write a for loop that will iterate from 0 to 20. For each
iteration, it will check if the current number is even or odd, and
report that to the screen (e.g. "2 is even").
*/

// CODE: 17

for(var i = 0 ; i<=20 ; i++)
{
    if(i % 2 == 1)
    {
        console.log(i + " is an odd number.");
    }

    else if(i % 2 == 0)
    {
        console.log(i + " is an even number.");
    }
    else{
        console.log(" Something different.");
    }
    
}

// Question : 18

/*
Write a program to calculate the product of the odd integers
from 1 to 7.

*/

// CODE: 18

var i = 0; 
var count  = 0;
var prod = 1;
for(i = 1 ; i<=7 ; i+=2)
    {
        prod = prod * i;
        count++;
    }
console.log("product sum --> " + prod + " count --> " + count);

// Question: 19

/*
Write a program that will write out a wedge of stars. The user
will enter the initial number of stars, and the program will write
out lines of stars where each line has one few star than the
previous line. Initial number of stars: 7
*/

// CODE: 19

var stars_input = prompt("Enter maximum numbers for printing the stars: ");
for(var j = 1; j<=stars_input ; j++)
{
    for(var k = stars_input ; k>j ; k--)
    {
        document.write("*");
    }
    document.write("<br>");
}

// Question: 20

/*
Write a program to create the following patterns in your
browser. Take number of lines as an input.
*/

// CODE: 20

// Pattern 1

for(var i = 1 ; i<=4 ; i++)
{
    for(var j = 1 ; j<=5 ; j++)
    {
        document.write(" * ");
    }
    document.write("<br>");
}

// Pattern 2

for(var i = 1 ; i<=5 ; i++)
{
    for(var j = 0; j<i ; j++)
    {
        document.write(" * ");
    }
    document.write("<br>");
}

// Pattern 3

var rows  = 5;
for(var i = 0 ; i<rows ; i++)
{
    for(var j  = rows ; j>i ; j--)
    {
        document.write(" * ");
    }
    document.write("<br>")
}





