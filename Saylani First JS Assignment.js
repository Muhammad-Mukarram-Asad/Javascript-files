/*
     Question: 01

 Write a program that takes input a name from user & greet the
 user like this:*/

//  Code:01
var name = prompt("Enter your good name plz: ");
alert("As Salam U Alaikum, " + name  );

/*
     Question: 02
Write a program to take input a number from user & display
it’s multiplication table on your browser. If user does not enter
a new number, multiplication table of 5 should be displayed by default.
*/

// Code:02
var input = prompt("Enter a number for printing its multiplication table:");
if(input == '')
{ 
    console.log("The Multiplication table of " + 5 + " is given below:")
    console.log("Because user enters nothing. So by default, the multiplication "
    + "table of number 5 is displayed.")

    for(var i = 1 ; i<=10 ; i++)
{
    console.log(5 + ' * ' + i + ' = ' + 5*i);
}

}
else{

for(var i = 1 ; i<=10 ; i++)
{
    console.log("The Multiplication table of " + input + " is given below:")
    console.log(input + ' * ' + i + ' = ' + input*i);
}
}

/*
     Question: 03
Write a program to take “city” name as input from user. If user
enters “Karachi”, welcome the user like this: “Welcome to city of lights"
*/

// Code : 03

var city_name = prompt("Enter City name plz:");
if(city_name == "Karachi" || city_name == "karachi")
{
    alert("Welcome to city of lights. Enjoy your tour and stays happy.");
}

/*
        Question: 04
Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the user is
female, give the message: Good Morning Ma’am.
*/

// Code: 04

var gender = prompt("Dear respected user, plz enter your gender:");
if(gender == "male" || gender == "Male")
{
    console.log("Good Morning Sir, have a nice day and keep visiting our website.")
}
else{
    console.log("Good Morning Ma’am, have a nice day and keep visiting our website.")
}

/*
        Question: 05
Write a program to take input color of road traffic signal from
the user & show the message according to this table:
*/

// Code: 05

var color = prompt("Enter the traffic signal light color:");
if(color == "red" || color == "Red")
{
    console.log("Vehicles must stop.")
}
else if(color == "yellow" || color == "Yellow")
{
    console.log("vehicles should get ready to move.");
}
else if(color == "green" || color == "Green"){
    console.log("vehicles can move now.")
}
else{
    console.log("You should enter wrong traffic light signal.")
}

/*
        Question: 06
Write a program to take input max age & current age from
user. If the current age is less than or equal to max age, show
the message “You are welcome”.
*/

// Code : 06
var max_age = prompt("Enter the maximum age: ");
var current_age = promt("Enter the current age: ");
if(current_age <= max_age)
{
    console.log("You are Welcome.");
}

/*
        Question: 07
Write a program to take input remaining fuel in car (in litres)
from user. If the current fuel is less than 0.25litres, show the
message “Please refill the fuel in your car”
*/

// Code: 07
var fuel = prompt("Enter the remaining fuel of a car in litres: ");
if(fuel < 0.25)
{
    console.log("Please refill the fuel in your car.");
}

/*
        Question: 08
Run this script, & check whether alert message would be
displayed or not. Record the outputs.
*/

// Code: 08

// 1)
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// 2
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// 3

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// 4

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals"); // Alerting message comes, hence its okay 100%.
}

// 5

if (true){
    alert("True"); // here it is alerting.
    }
    if (false){
    alert("False"); // here is is not giving any answeer due to false keyword.
    }

// 6
if("car" < "cat")
{
    alert("car is smaller than cat"); // Its working fine. it is comparing the
    // alphabetic order of the characters.
    
}

/*
       Question: 09

Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute grade as
per following table:

Show the total marks, marks obtained, percentage, grade &
remarks like:
*/

// Code: 09
var marks_1 = prompt("Enter the marks of the first subject:");
var marks_2 = prompt("Enter the marks of the second subject:");
var marks_3 = prompt("Enter the marks of the third subject:");
var total_marks = prompt("Enter the total marks of the above three subjects:");

var obtained_marks = marks_1 + marks_2 + marks_3;
var Percentage = ((obtained_marks / total_marks)*100);

if(Percentage >= 80)
{
    var Grade = "A-One";
    var remarks = "Excellent";
    alert("Your Grade is" + Grade)
    alert(" Ma Sha Allah, " + remarks)
}

else if(Percentage >= 70)
{
    var Grade = "A";
    var remarks = "Good";
    alert("Your Grade is" + Grade)
    alert(" Ma Sha Allah, " + remarks)
}
else if(Percentage >= 60)
{
    var Grade = "B";
    var remarks = "you need to improve.";
    alert("Your Grade is" + Grade)
    alert(" Ma Sha Allah, " + remarks)
}
else if (Percentage< 60){
    var Grade = "C";
    var remarks = "Fail";
    alert("Your Grade is" + Grade)
    alert(" Oh no, you are " + remarks)
}
else
{
    console.log("Baba Urooj.")
}

alert(
    " Marksheet \n" +
    "Total marks: " + total_marks + " \n " +
    "Obtained marks: " + obtained_marks + " \n " +
    "Percentage: " + Percentage + " \n " +
    "Grade: " + Grade + " \n " +
    "Remarks: " + remarks + " \n " 
)

/*
     Question: 10

Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Take input
from users, the following:
a. Name of item1
b. Name of item2
c. Price of item 1
d. Price of item 2
e. Ordered quantity of item 1
f. Ordered Quantity of item 2
g. Shipping charges
Compute the total cost. If the total cost is above 2000 PKR ,
offer them 10% discount & show the receipt in your browser.
*/

// Code: 10

var name_1 = prompt("Enter the name of item-1 plz: ");
var name_2 = prompt("Enter the name of item-2 plz: ");
var price_1 = prompt("Enter the price of item-1 plz: ");
var price_2 = prompt("Enter the price of item-2  plz: ");
var OrderedQuantity_1 = prompt("Enter the OrderedQuantity of item-1 plz: ");
var OrderedQuantity_2 = prompt("Enter the OrderedQuantity of item-2  plz: ");
var shipping_charges = prompt("Enter the shipping charges plz: ");

var p1 = parseInt(price_1);
var p2 = parseInt(price_2);
var o1 = parseInt(OrderedQuantity_1);
var o2 = parseInt(OrderedQuantity_2);
var sc = parseInt(shipping_charges);

var total_amount = ((p1 * o1) +(p2 * o2) +(sc));
var discounted_amount = total_amount * 0.1;
var net_amount = total_amount - discounted_amount;
if(total_amount > 2000)
{
    console.log(" Hence your total amount is above 2000 PKR, so with respect to our rules," +
    " we will provide you 10% discount. \n  So, your total amount is = " + total_amount +
    "\n  and after discount your net amount is = " + net_amount );
}
else{
    console.log(" Hence your total amount is above 2000 PKR, so with respect to our rules," +
    " we will provide you 10% discount. \n  So, your total amount is = " + total_amount +
    "\n  and after discount your net amount is = " + net_amount );
}



var Easy = 5;
var a = 5;
b = ++a;

var c = a+=Easy+ a++;
console.log(c);



