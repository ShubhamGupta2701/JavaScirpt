
//let is a keyword used to declare variable which can overright during execution and afterwards. 
let myName = "Shubham Gupta";
console.log(myName);
 
//const is also a keyword used to declare constant variables, which can't be changed.
const age  = 21;
console.log(age);

const degreee = "MCA";
console.log(degreee);


//here index starts from 0 therefore i add 1 in my index. 
console.log("index of 'b' is : ",myName.indexOf("b")+1);

//Gives the last occuring index of the word which we want to find.
console.log("last index of 'h' is : ",myName.lastIndexOf('h')+1);

//Replace my string with another string or char.
console.log("After replacing my name : ",myName.replace("Shubham Gupta","Riya Goel"));

//gives me the substring in between the range i given in it.
console.log("substring of my name at index 1,4 is: ",myName.substring(1,4));

//return bool value if it starts with 'S'.
console.log("Is my name starts with 'S' : ",myName.startsWith("S"));

//return bool value if it include 'Gupta'.
console.log("Does my name includes 'Gupta' in it : ",myName.includes("Gupta"));
