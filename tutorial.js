//=================================================
// JavaScript is a forgiving language
// variables can be redefined and don't have types
// you don't need classes in JavaScript
//=================================================

//String myName = "Shrey";
//myName = 4;

let myName = "Shrey";
myName = "Not Shrey";
myName = 7.5;
myName = 32;

const stringVar = "5";
stringVar = "monkey";

myName = stringVar * 6; // 30

let myBoolVar = true; // false

//let, const
const PI = 3.141592653589793;
PI = 3.4;

/*
int multByFive(int input) {
    // do some code
    return input * 5;
}
*/

function multByFive(input) {
    return myName * 5;
}

/*

&& - and
|| - or
== - equal to
!= - not equal to

NEW:
=== -
!== - 

FALSY: [], "", 0, null, undefined

*/

// array
let myImportantData;

// if (myImportantData != null || myImportantData.length != 0)

// if (myImportantData != null || myImportantData.length != 0)
if (myImportantData) {

} else {

}

let anotherData;

// some more code here

anotherData = 0;

// check if data is initialized
if (anotherData) {
    console.log("Data is set and initialized properly");
}
else {
    console.log("Data is NOT set and initialized properly");
}

// for & while loops are exactly the same
for (let i = 0; i < array.length; i++) {

}

while (myNumber > 5) {

}

// System.out.println("Hi");
// print("Hi");
// console.log("Hi");