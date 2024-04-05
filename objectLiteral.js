/*
let user = {
    name : "Shubham",
    email : "sgupta_mca21@thapar.edu",
    age : 22,
    isLoggedIn : false
};

console.log(user);
console.log(user.name);
let key = "name";
console.log(user.key); // here it'll throuh an error
console.log(user[key]);
console.log(user.name);
user.isLoggedIn = true;
console.log(user.isLoggedIn);
*/
/*
let user = {
    name : "Shubham",
    email : "sgupta_mca21@thapar.edu",
    age : 22,
    isLoggedIn : false,
    login : ()=>{
        user.isLoggedIn = true;
        console.log(`${this.name} Loged IN`);
    },
    logout : ()=>{
        user.isLoggedIn = false;
        console.log(`${this.name} Loged OUT`);
    }
};*/



/*
let user = {
    name : "Shubham",
    email : "sgupta_mca21@thapar.edu",
    age : 22,
    isLoggedIn : false,
    login : function(){
        user.isLoggedIn = true;
        console.log(`${this.name} Loged IN`);
    },
    logout : function(){
        user.isLoggedIn = false;
        console.log(`${this.name} Loged OUT`);
    }
};
console.log(user.name);
console.log(user.isLoggedIn);
user.login();
console.log(user.isLoggedIn);
user.logout();
console.log(user.isLoggedIn);

*/

/*
let user = {
    name : "Shubham",
    email : "sgupta_mca21@thapar.edu",
    age : 22,
    isLoggedIn : false,
    //here we use objects in array 
    blog : [
        {title:"Blog 1",numComment : 251, wordCount : 102030},
        {title:"Blog 2",numComment : 151, wordCount : 12030},
        {title:"Blog 3",numComment : 261, wordCount : 122030},
        {title:"Blog 4",numComment : 951, wordCount : 912030},
        {title:"Blog 5",numComment : 51, wordCount : 2030},
        {title:"Blog 6",numComment : 153, wordCount : 12530}
    ],
    
    allBlogConsole : function(){
        this.blog.forEach((blog)=>{console.log(blog)});
    },
    login : function(){
        user.isLoggedIn = true;
        console.log(`${this.name} Loged IN`);
    },
    logout : function(){
        user.isLoggedIn = false;
        console.log(`${this.name} Loged OUT`);
    }
};

user.allBlogConsole();

*/


let num = 10.645;
newNum = Math.round(num);
console.log(newNum);

let random = Math.round(Math.random()*100);
console.log(random);

let num1 = 5;
let num2 = num1;
num1 = 10;
console.log(num1);
console.log(num2);
console.log(num1);

let student1 = {name:"Shubham",degree:"MCA",rollno:00010};
// let student2 = student1;  //  this create an exact copy and also update the data inside our new array when we modify our array1.
let student2 = {...student1};  // --> and thats why we use spread operator .  to overcome this problem. 
student1.name = "chotu";
student1.rollno = 1111111111;
console.log(student1);
console.log(student2);

// similarly we can use this speard operator to object literals.
/*

let array1 = ["Shubham","choty"];
let array2 = array1;
array1.push("Saurabh");
//here it change in both the arrays.  and the solution for this problem is to use spread operator to decalare the new array .
let array3 = [...array1];   // this triple-dot operator is known as spread operator.
array1.push("Tanu");
array1.push("Himanshi");
console.log(array1);
console.log(array2);
console.log(array3);

*/
