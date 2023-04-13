const usernamePtr = /^[a-zA-Z0-9]{6,20}$/;
const feedbackPtr = /^.{20,100}$/;

function usernameValidation(event){
    const userresult = usernamePtr.test(event.target.value);
    if(userresult){
        event.target.setAttribute("class","accepted");
        return true;
    }
    else{
        event.target.setAttribute("class","rejected");
        return false;
    }
}

function feedbackValidation(event){
    const feedbackresult = feedbackPtr.test(event.target.value);
    if(feedbackresult){
        event.target.setAttribute("class","accepted");
        return true;
    }
    else{
        event.target.setAttribute("class","rejected");
        return false;
    }
}

function displayData(event){
    event.preventDefault();
    console.log("clicked!!...");
}

function changeText(event){
    event.target.innerText = "Riya";
}

