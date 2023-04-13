const form = document.querySelector(".feedback-form");
const p = document.querySelector("p");

const usernamePtr = /^[a-zA-Z0-9]{6,20}$/;
const feedbackPtr = /^.{20,100}$/;
form.addEventListener("submit",(event)=>{
    event.preventDefault(); 
    const userresult = usernamePtr.test(form.username.value);
    const feedbackresult = feedbackPtr.test(form.feedback.value);

    if(userresult && feedbackresult){
        p.setAttribute("class","success");
        p.textContent = "Feedback submitted successfully, ThankYou!!...";
    }
    else{
        p.setAttribute("class","error");
        p.textContent = "Please check username and  feedback correctly!!...";
    }
});

form.username.addEventListener("keyup",(event)=>{
    const userresult = usernamePtr.test(event.target.value);
    if(userresult){
        form.username.setAttribute("class","accepted");
    }
    else{
        form.username.setAttribute("class","rejected");
    }
});


form.feedback.addEventListener("keyup",(event)=>{
    const feedbackresult = feedbackPtr.test(event.target.value);
    if(feedbackresult){
        form.feedback.setAttribute("class","accepted");
    }
    else{
        form.feedback.setAttribute("class","rejected");
    }
});