// Question: 1
/*
Declare an empty array using JS literal notation to store
student names in future.
*/

// CODE:01

var stu_names = [];

// Question: 2

/*
Declare an empty array using JS literal notation to store
student names in future.
*/

// CODE: 02
var objectA = {}
var objectB = new Object()

// Question: 3
/*
Declare and initialize a strings array.
*/

// CODE:03
var strings_array = ["Pakistan","Turkey","Bangladesh","Saudi Arabia"];
console.log(strings_array);


// Question: 4
/*
Declare and initialize a numbers array.
*/

// CODE:04

var numbers_array = [10,20,30,40,50]
typeof(numbers_array)
console.log(numbers_array);



// Question: 5
/*
Declare and initialize a boolean array.
*/

// CODE:05
var boolean_array = [true, false];
console.log(boolean_array);



// Question: 6
/*
Declare and initialize a mixed array.
*/

// CODE:06
var mixed_array = ["Mukarram","Asad",20,08,true,false];
console.log(mixed_array);


// Question: 7
/*
Declare and Initialize an array and store available mobile
networks in Pakistan.
*/

// CODE:07

var mobile_networks = ["Ufone","Zong","Jazz","Telenor"];
console.log(mobile_networks);


// Question: 8
/*
Declare and Initialize an array and store available education
qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
M. Phil., PhD). Show the listed qualifications in your browser
like:
*/

// CODE:08

var qualifications = ["SSC","HSC","BSC","BS","BCOM","MS","M.Phil","PhD"];
for(var i = 0 ; i<qualifications.length ; i++)
console.log((i+1) + ') ' + qualifications[i]);


// Question: 9
/*
Declare and initialize an empty array to store top movies of
2015. Add movies one by one in an array. Display the elements
& length of array in your browser. (Use array’s length method)
*/

// CODE:09

var movies_array = [];
movies_array.push("The Batman");
movies_array.push("Man of Steel");
movies_array.push("Spider Man");
movies_array.push("Dawn of Justice");
movies_array.push("The Dark Knight Rises");

console.log("Top Movies of 2015 are:")
for(var j = 0 ; j<movies_array.length ; j++)
{
    console.log((j+1) + ') ' + movies_array[j]);
}
console.log("The Length of the array is = " + movies_array.length);


// Question: 10
/*
Declare and Initialize an array with your favorite cars. Show
a. First index of the array
b. Car at first index of the array
c. Last index of the array
d. Car at last index of the array
*/

// CODE:10

var fav_cars = ["Corolla", "Civic","Accord","Swift","Prius","Cultus"];
console.log("The first index of the favorite_cars array is = " + 0);
console.log("The car at the first index is = " + fav_cars[0]);
console.log("The last index of the favorite_cars array is = " + (fav_cars.length-1));
console.log("The car at the last index is = " + fav_cars[(fav_cars.length-1)]);


// Question: 11
/*
Write a program to store 3 student names in an array. Take
another array to store score of these three students. Assume
that total marks are 500 for each student, display the scores &
percentages of students like:
*/

// CODE:11

var stu_names = ["Ali","Babar","Daniel"];
var scores = [400, 350 , 300];
var total_score = 500;

console.log("Output of the above program: \n ");

console.log("Score of the " + stu_names[0] + " is = " + scores[0] + 
    " and his percentage is = " + ((scores[0]/total_score) * 100)
     );
console.log("Score of the " + stu_names[1] + " is = " + scores[1] + 
        " and his percentage is = " + ((scores[1]/total_score) * 100) );

console.log("Score of the " + stu_names[2] + " is = " + scores[2]+ 
            " and his percentage is = " + ((scores[2]/total_score) * 100) );
            


// Question: 12
/*
Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.

b. Ask the user what color he/she wants to add to the end &
add that color to the end of the array. Display the updated
array in your browser.

c. Add two more color to the beginning of the array. Display
the updated array in your browser.

d. Delete the first color in the array. Display the updated
array in your browser.

e. Delete the last color in the array. Display the updated
array in your browser.

f. Ask the user at which index he/she wants to add a
color name. Then add the color to desired position/index.
. Display the updated array in your browser.

g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.


*/

// CODE:12

// var color_names = ["Red","Green","Blue"];
// console.log(color_names);

// console.log(" \n Part- a Solution \n ");
// var a = prompt("Enter the color name which you want to enter at the beginning:");
// color_names.unshift(a);
// console.log(color_names);

// console.log("\n Part- b Solution \n ");
// var b = prompt("Enter the color name which you want to enter at the end:");
// color_names.push(b);
// console.log(color_names);

// console.log("\n Part- c Solution \n ");
// color_names.unshift("Mergenda");
// color_names.unshift("Whitesmoke");
// console.log(color_names);

// console.log("\n Part- d Solution \n ");
// color_names.shift()
// console.log(color_names);

// console.log("\n Part- e Solution \n ");
// color_names.pop()
// console.log(color_names);

// console.log("\n Part- f Solution \n ");
// var f = +prompt("Enter the index number for insertion of an element in the array: ");
// var f1 = prompt("Plz enter the color name which you want to add at the specified index: ");
// color_names.splice(f,0,f1);
// console.log(color_names);

// console.log("\n Part- g Solution \n ");
// var g = +prompt("Enter the index number for deletion of an element from the array: ");
// var g1 = prompt("Plz enter the total number of deletion of the elements: ");
// color_names.splice(g,g1);
// console.log(color_names);



// Question: 13
/*
Write a program to store student scores in an array & sort
the array in ascending order using Array’s sort method.
*/

// CODE:13

var unsorted_scores = [110,50,200,150,180,320,500,20,60,10];
console.log(" The un-sorted array is = " + unsorted_scores);
console.log(" The sorted array in ascending order is given below:");

// below is the special method for sorting the numbers in javascript.
console.log(unsorted_scores.sort(function(a, b){return a-b}));




// Question: 14
/*
Write a program to sort the below mentioned array:
var fruits = [“strawberry”, “apple”, “orange”, “banana”];
*/

// CODE:14
var fruits = ['strawberry', 'apple', 'orange', 'banana'];
console.log(fruits);
console.log(fruits.sort());

// Question: 15

/*
Write a program to initialize an array with city names. Copy
3 array elements from cities array to selectedCities array.
*/

// CODE: 15

var cities = ["karachi","Lahore","Peshawar", "Quetta","Sialkot"];
console.log(cities)
var selectedCities = [];
selectedCities[0] = cities[1];
selectedCities[1] = cities[2];
selectedCities[2] = cities[3];
console.log(selectedCities);
cities.unshift("Islamabad");
cities.unshift("Rawalpindi");
console.log(cities)
console.log(selectedCities);

// Question: 16

/*
Write a program to create a single string from the below
mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)
*/

// CODE: 16

var arr = ['This', 'is', 'my ', 'cat'];
console.log(arr);
console.log(arr.join(" "));

// Question: 17

/*
Create a new array. Store values one by one in such a way
that you can access the values in the order in which they were
stored. (FIFO-First In First Out)
*/

// CODE: 17

var fifo = ['keyboard', 'mouse','printer','monitor'];
console.log(fifo);
console.log(fifo.shift());
console.log(fifo.shift());
console.log(fifo.shift());
console.log(fifo.shift());


// Question: 18

/*
Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In-First Out)
*/

// CODE: 18

var lifo = ['keyboard', 'mouse','printer','monitor'];
console.log(lifo);
console.log(lifo.pop());
console.log(lifo.pop());
console.log(lifo.pop());
console.log(lifo.pop());




// Question: 19
/*
Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
the following dropdown/select menu in your browser using
document.write() method:
*/

// CODE: 19
var  manufacturers = ['Apple','Samsung','Motorola','Sony','Haier'];
var options =
[
  {
    "text"  : "Apple",
    "value" : "Value 1"
  },
  {
    "text"     : "Samsung",
    "value"    : "Value 2",
    "selected" : true
  },
  {
    "text"  : "Motorolla",
    "value" : "Value 3"
  },
  {
      "text" : "Sony",
      "value": "value 4"
  },
  {
      "text" : "Redmi",
      "value": "value 5"
  }
];

var selectBox = document.getElementById('rec_mode');

for(var i = 0; i<options.length; i++){
  var option = options[i];
  selectBox.options.add( new Option(option.text, option.value, option.selected) );
}




// Question: 20

/*
Declare and initialize an empty multidimensional array.

*/

// CODE: 20
var multidimensional_array = [
  [],
  [],
  []
];
console.log(multidimensional_array);
console.log(typeof(multidimensional_array));

// Question: 21

/*
Declare and initialize a multidimensional array representing
the following matrix:
      0 1 2 3
      1 0 1 2
      2 1 0 1

*/

// CODE: 21
var multidimensional_array_2 = [
  ['0 ', '1 ' ,'2 ','3'],
  ['1 ', '0 ' ,'1 ','2'],
  ['2 ', '1' ,'0 ','1'],
];
console.table(multidimensional_array_2);

for(var i = 0 ; i < multidimensional_array_2.length ; i++)
{
  var inner_length = multidimensional_array_2[i].length;

  for(var j = 0 ; j < inner_length.length ; j++)
  {
    console.log( '[' + i + ' , ' + j + ']' +  ' = ' + (multidimensional_array_2[i][j]));
  }
}


// For practice:

// // Create one dimensional array
// var gfg = new Array(3);

// document.write("Creating 2D array <br>");

// // Loop to create 2D array using 1D array
// for (var i = 0; i < gfg.length; i++) {
// 	gfg[i] = new Array(3);
// }

// var h = 0;

// // Loop to initialize 2D array elements.
// for (var i = 0; i < 3; i++) {
// 	for (var j = 0; j < 3; j++) {
// 		gfg[i][j] = h++;
// 	}
// }

// // Loop to display the elements of 2D array.
// for (var i = 0; i < 3; i++) {
// 	for (var j = 0; j < 3; j++) {
// 		document.write(gfg[i][j] + " ");
// 	}
// 	document.write("<br>");
// }


