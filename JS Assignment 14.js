// Prototypes in JS:

var checkTime = new Date().getTime();
var checkDate = new Date(checkTime);
console.log(checkDate.toString());

console.log(checkDate.toDateString);
console.log(checkDate.toTimeString);
console.log(checkDate.toLocaleDateString);

/*
1) Create 10 objects for the USER using constructor function and push them in an array, 
consisting of these fields:

_id: Should be random
name: Hardcoded
profileImage: Hardcoded Image Url
createdAt: Current Date in milliseconds
friends: Array consisting of some other user Ids

Loop through each user and show the list of friend's name for each user!
*/

// CODE : 01

function USER(id,name, profileImage)
{
    this.id = Math.ceil(Math.random(10));
    this.name = name,
    this.profileImage = profileImage,
    this.createdAt = new Date(),
    this.friends = [id, id, id]
}

let user1 = new USER(id, "ABC","www.user1.image.pk");

function USER(id, name, profileImage)
{
    var id_var = Math.ceil(Math.random()*lengths);
    this.id = id_var;
    this.name = name,
    this.profileImage = profileImage,
    this.createdAt = new Date().toDateString(),
    this.friends = [Math.ceil(Math.random()*20), Math.ceil(Math.random()*20), Math.ceil(Math.random()*20)]
}

let user2 = new USER(10,"ABC","www.user1.image.pk");
for(var i = 0 ; i<user2.friends.length ; i++)
{
    console.log(" The id of the friend number "+ (i+1) + " is = " + user2.friends[i]);
}


// Second task of first question.
function friend_info(name , F_id)
{
    this.name =  name;
    this.F_id = F_id;
    console.log(" The friends name is = " + name + "\n and the friend's id is = " + F_id);
}

function delete_friend(user_id , friend_id)
{
     this.user_id = user_id;
     this.friend_id = friend_id;
}



function USER(id, name, profileImage)
{
    var id_var = Math.ceil(Math.random()*id);
    this.id = id_var;
    this.name = name,
    this.profileImage = profileImage,
    this.createdAt = new Date().toDateString(),
    this.friends = [Math.ceil(Math.random()*20), Math.ceil(Math.random()*20), Math.ceil(Math.random()*20)]
    this.friends_biodata = friend_info("Mukarram" , 85);
}
var user3 = new USER(3,"Asad","png.com");

/*
/Q1: I want this code to log out "hey amy", but it logs out "hey arnold" - why?

function greet (person) {
if (person == { name: 'amy' }) {
return 'hey amy'
} else {
return 'hey arnold'
}
}
greet({ name: 'amy' })

*/

function greet(person)
{
    if(person == {name : "Mukii"})
    {
        return 'Hey Mukii'
    }
    else
    {
        return 'hey Mukarram'
    }
}

console.log(greet({name: 'Mukii'})); // Answer is hey Mukarram, hence if condition is false.

// The reason behind why we not getting the result 'hey Mukii' is given below:

/*
Objects are not like arrays or strings. So simply comparing by using "===" or "==" is
 not possible. Here to compare we have to first stringify the object and then using
  equality operators it is possible to compare the objects.
*/

// So the correct code for comparing the two object notations/types is given below:

function greet(person)
{
    if(JSON.stringify(person) == JSON.stringify({name : "Mukii"}))
    {
        return 'Hey Mukii'
    }
    else
    {
        return 'hey Mukarram'
    }
}

console.log(greet({name: 'Mukii'})); // Here we are getting hey Mukii as a result.

// lodash library for checking the key/value pair of two objects:

/* <html>
<head>
   <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/0.10.0/lodash.min.js"></script>
</head>
<body>
   <script>
      const obj1 = {Name: "Rahim", City: 'Hyderabad', Country: "India" };
      const obj2 = {Name: "Rahim", Country: "India", City: 'Hyderabad', };
      document.write(JSON.stringify(obj1) === JSON.stringify(obj2));
      document.write("</br>");
      document.write(_.isEqual(obj1, obj2));
   </script>
</body>
</html> */


/*
//Q2: I want this code to log out the numbers 0, 1, 2, 3 in that order, but it doesn’t do what
 I expect (this is a bug you run into once in a while, and some people love to ask about it in
interviews).

for (var i = 0; i < 4; i++) {
setTimeout(() => console.log(i), 0)
}
*/

for (var i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0)
}
// unfortunately, couldn't find the solution of the above question.

/*

//Q3: I want this code to log out "doggo", but it logs out undefined!
let dog = {
name: 'doggo',
sayName () {
console.log(this.name)
}
}
let sayName = dog.sayName
sayName()
*/
let dog = {
    name: 'doggo',
    sayName () {
    console.log(this.name)
    }
}
let sayName = dog.sayName
sayName()
// The reason behind undefines is that we are not getting the name by its Object.
//  and also there is no function keyword before sayName().

// The correct code is given below:

let dogs = {
    name: 'doggo',
    sayName () {
    console.log(this.name)
    }
}
let sayNames = dog.sayName()
console.log(sayNames);

let doggie = {
    name: "doggo",
    fullname : function sayName()
    {
        console.log(this.name)
    }
}
doggie.fullname();



/*
//Q4: I want my dog to bark(), but instead I get an error. Why?
function Dog (name) {
this.name = name
}
Dog.bark = function () {
console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()
*/

function Dog (name) {
    this.name = name;
    this.bark = function () {
    console.log(this.name + ' says woof')
}
}
let fido = new Dog('fido')
fido.name;
fido.bark();

/*
/Q5: Why does this code return the results that it does?
function isBig (thing) {
if (thing == 0 || thing == 1 || thing == 2) {
return false
}
return true
}
isBig(1) // false
isBig([2]) // false
isBig([3]) // true
*/

// The code is working fine. There is no error i think so in the above code.
// On 0,1,2 --> it returns true and except them it returns false.







