/*

// so basically DOM is used to overright or modify something in our website 
// this help us to modify or change some objects in our website according to our need.
// basically it uses querySelector function to select any particular class,id, tag or any element. 
// its syntac is as follows 
let title = document.querySelector("title");
// console.log(title.innerText);
title.innerText = "Riya-Shubham";
// console.log(title.innerText);

// also we can use getattribute or setattribute when we use innerHTML for changing tags and other things.


*/


const addProductButton = document.querySelector("button");
addProductButton.addEventListener("click",()=>{
    addProductButton.setAttribute("style","display: none");
});
