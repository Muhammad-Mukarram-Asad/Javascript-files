// Simple for loop:
for (let index = 1; index <= 10; index++) {
    console.log(index + " Mukarram Asad.");
   
}
let array = ["Asad", "Saad","Maaz","Ayaz","Waqas"]
console.log("The length of the array is = " + array.length);

for (let index = 0; index < array.length; index++) {
    console.log("Hello Mr. " + array[index]);

    
}
// For-each loop in JS:
array.forEach(function f(element)
{
    console.log(" Jee you Mr. " + element + " plz come here and sit infront of me.")
})

// For-each loop in JS Again but this time with another syntax:

for(elements of array)
{
    console.log(elements);
    document.write(elements, "<br>")
}

// Use this loop for iterating over objects in javascript
let info = {
name : "Muki", 
age : 20,
birthday:"15-08-2001"
};

for(key in info)
{
   console.log(" The " + key +"of employee is " + info[key]);
   document.write(" The " + key +"of employee is " + info[key], "<br>");

}

// While loop in JS:
let i = 0;
while(i<5)
{
    console.log(i + "is less than 5");
}

// Do while loop:
let j = 1;
do{
    console.log(j + " is less than 10.");
}
while(j<10);