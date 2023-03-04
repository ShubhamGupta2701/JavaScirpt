let friends = ["Riya","Saurabh","Tanu","Himanshi","Myansha"];
// console.log("This statement runs before the for loop !!!");

//This is normal for loop..
/*for(let i=0;i<friends.length;i++){
    console.log(friends[i]);
}*/

//this is of for loop another variation of for loop in js.

/*
for (let friend of friends){
    console.log(friend);
}
*/


/*
friends.push("Manpreet");

//this is in for loop another variation of for loop in js.
for(let index in friends){
    console.log(friends[index]);
}
*/

// console.log("This statement runs after the for loop !!!");
let nameAge = {
    username : "Shubham",
    age : 22
};
for(let key in nameAge){
    console.log(nameAge[key]);
}

