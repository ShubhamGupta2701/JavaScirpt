const name= "Shubham";

name1 = "Shubham gupta";

//console.log("Hi my name is ",name); 
//This is a normal Function
function logger(){
    console.log("Lets do Party!");
    console.log("Lets do Party!");
    console.log("Lets do Party!");
    console.log("Lets do Party!");
}

logger(); // Function calling

//This is a parameterized Function
function adder(n1,n2){
    console.log(n1+n2);
}

adder(2,3); // Function calling


//This is a parameterized function used to convert our string to upper case. 
function toUpper(text){
    const upperText = text.toUpperCase();
    console.log(upperText);
}

//function calling
toUpper(name);

toUpper(name1);
