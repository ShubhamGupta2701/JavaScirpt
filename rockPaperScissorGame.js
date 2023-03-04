let moves = ["ROCK","PAPER","SCISSOR"];
let check = false;
let computerMove = null;
while(check == false){
    let playerMove = prompt("Enter your move : ");
    playerMove = playerMove.toUpperCase();
    console.log("P : ",playerMove);
    if(moves.includes(playerMove)){
        if(playerMove == "ROCK"){
            computerMove = "PAPER";
            console.log("C : ",computerMove);
        }
        else if(playerMove == "PAPER"){
            computerMove = "SCISSOR";
            console.log("C : ",computerMove);
        }
        else{
            computerMove = "ROCK";
            console.log("C : ",computerMove);
        }
    }
    else{
        console.log("Please enter a valid move");
    }
    
    let editCheck = prompt("If want to PlayAgain then enter 1 else enter 0 : ");
    if(editCheck != 1){
        break;
    }
}