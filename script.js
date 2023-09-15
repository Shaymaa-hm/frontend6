var firstName = "Shaymaa";
var lastName = "Atef";
var age = "21";

var allParagraphs = document.getElementsByTagName("p");
allParagraphs[0].textContent=firstName;
allParagraphs[1].textContent=lastName;
allParagraphs[2].textContent=age;

var divs =document.getElementsByTagName("div");
divs[0].classList.add("colors");

console.error("Done");