    let humanScore = 0;
    let computerScore = 0;
    let tieScore = 0;

function getComputerChoice(){
    let random =  Math.floor(Math.random() * 3);
    if( random == 0 ){
        return "Rock";
    }else if(random == 1){
        return "Paper";
    }else{
        return "Scissor";
    }
}

function getHumanChoice(){
    let input = prompt(" Enter your choice from 'Rock' 'Paper' and 'Scissor' ");
    return input;
}

function playRound(humanChoice, computerChoice){

    if  ((humanChoice == "Scissor" || humanChoice == "SCISSOR" || humanChoice == "scissor") && (computerChoice == "Rock")){
        computerScore = computerScore+1;
        return alert ("Computer win! Rock beats Scissor");

    }else if((humanChoice == "Scissor" || humanChoice == "SCISSOR"|| humanChoice == "scissor") && (computerChoice == "Paper")){
        humanScore = humanScore+1;
        return alert("You win! Scissor beats Paper");

    }else if((humanChoice == "Paper" || humanChoice == "paper" || humanChoice == "PAPER") && (computerChoice == "Rock")){
        humanScore = humanScore+1;
        return  alert(" You win! Paper beats Rock");

    }else if((humanChoice == "Paper" || humanChoice == "paper" || humanChoice == "PAPER") && (computerChoice == "Scissor")){
        computerScore++;
        return alert(" Computer win! Scissor beats Paper");  

    }else if ((humanChoice == "Rock " || humanChoice == "rock" || humanChoice == "ROCK") && (computerChoice == "Paper")){
        computerScore++;
        return alert("Computer win! Paper beats Rock");

    }else if ( (humanChoice == "Rock " || humanChoice == "rock" || humanChoice == "ROCK") && (computerChoice == "Scissor")){
        humanScore++;
        return alert("You win! Rock beats Scissor");
    }else {
        tieScore++;
        return alert("Match Tie");
    }           
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);











