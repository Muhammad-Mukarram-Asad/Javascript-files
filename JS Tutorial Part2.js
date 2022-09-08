// DOM Manipulation:

let a = document.getElementById("box1");
console.log(a);

let b = document.getElementsByClassName("box2");
console.log(b);

let c = document.getElementById("Table");
console.log(c);
c.style.backgroundColor = "red";
c.style.color = "white";

//classList.add(Any class name even it is not exist.)

c.classList.add("class-1");
// Remove method of classList:
c.classList.remove("class-1");

let g = document.getElementById("main");
console.log(g);
let h = g.innerHTML;
console.log(h);
let i = g.innerText;
console.log(i);

console.log("Yahan sa alag kam shru hota hai bhai.")
console.log(g.innerText);
console.log(g.innerHTML);

// ANother attribute of document:
tagname = document.getElementsByTagName("div");
console.log(tagname);

// For appending a child in a div:
let createdElement = document.createElement("p");
createdElement.innerText = " This paragraph is intensionally created in order to append it.";
tagname[0].appendChild(createdElement);

// This is a way to replace any text from div or any other object.
// replace method takes two parameters(New thing , Old thing).

let createdElement2 = document.createElement("i");
createdElement2.innerText = " This is a italic paragraph created in order to replace it.";
tagname[0].replaceChild(createdElement2 , createdElement);

// There are other methods too. SO check them with respect to your Need.
console.log(document.title);
console.log(document.timeline);
console.log(document.URL);
console.log(document.links);
console.log(document.forms);
// This is used for selction of selectors in CSS.
         let sel =  document.querySelector(".container");
         console.log("This will return very first class of container if there are more than one classes of", 
         "same name >>> ", sel);

         let s = document.querySelector("#main");
         console.log(s);

         let x = document.querySelector("#main>li")
         console.log(x);

         let f = document.querySelectorAll("#main>li")
         console.log(f);

