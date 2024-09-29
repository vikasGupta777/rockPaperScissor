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

function playRound(humanChoice, computerChoice){

    if (humanScore == 5  || computerScore == 5){
        if(humanScore ==5){
            result.textContent = " PLAYER WIN!!!!";
            playerWins.textContent = "";
            computerWins.textContent = "";
        }else {
            result.textContent = " COMPUTER WIN!!!";
            playerWins.textContent = "";
            computerWins.textContent = "";
        }
        
    }
    else if  ((humanChoice == "Scissor" || humanChoice == "SCISSOR" || humanChoice == "scissor") && (computerChoice == "Rock")){
        computerScore = computerScore+1;
        result.textContent = "Computer win! Rock beats Scissor";
        computerWins.textContent = computerScore;

    }else if((humanChoice == "Scissor" || humanChoice == "SCISSOR"|| humanChoice == "scissor") && (computerChoice == "Paper")){
        humanScore = humanScore+1;
        result.textContent =("You win! Scissor beats Paper");
        playerWins.textContent = humanScore;

    }else if((humanChoice == "Paper" || humanChoice == "paper" || humanChoice == "PAPER") && (computerChoice == "Rock")){
        humanScore = humanScore+1;
        result.textContent =(" You win! Paper beats Rock");
        playerWins.textContent = humanScore;

    }else if((humanChoice == "Paper" || humanChoice == "paper" || humanChoice == "PAPER") && (computerChoice == "Scissor")){
        computerScore++;
        result.textContent =(" Computer win! Scissor beats Paper"); 
        computerWins.textContent = computerScore; 

    }else if ((humanChoice == "Rock" || humanChoice == "rock" || humanChoice == "ROCK") && (computerChoice == "Paper")){
        computerScore++;
        result.textContent =("Computer win! Paper beats Rock");
        computerWins.textContent = computerScore;

    }else if ( (humanChoice == "Rock" || humanChoice == "rock" || humanChoice == "ROCK") && (computerChoice == "Scissor")){
        humanScore++;
        result.textContent =("You win! Rock beats Scissor");
        playerWins.textContent = humanScore;
    }else {
        tieScore++;
        result.textContent =("Match Tie");
    }           
}


const main = document.createElement("div");
document.body.appendChild(main);

const mainHeader = document.createElement("div");
main.appendChild(mainHeader);


const rockBtn = document.createElement("button");
rockBtn.innerText = " Rock"; 
mainHeader.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.textContent = " Paper"; 
mainHeader.appendChild(paperBtn);

const scissorBtn = document.createElement ("button");
scissorBtn.textContent = " Scissor"
mainHeader.appendChild(scissorBtn);

mainHeader.style.border = "2px solid red";
mainHeader.style.alignItems = "center";
mainHeader.style.justifyContent = "spaceAround";

const result = document.createElement("div");
result.style.border = "2px ";
result.style.boxSizing = "border-box"
result.style.height = "50px";
result.style.width = "250px";
main.appendChild(result);

const playerWins = document.createElement("div");
playerWins.style.border = "2px solid black";
playerWins.style.boxSizing = "border-box"
playerWins.style.height = "50px";
playerWins.style.width = "125px";
main.appendChild(playerWins);

const computerWins = document.createElement("div");
computerWins.style.border = "2px solid black"; 
computerWins.style.boxSizing = "border-box"
computerWins.style.height = "50px";
computerWins.style.width = "125px";
main.appendChild(computerWins);

rockBtn.addEventListener("click",()=> {
    let humanSelection = rockBtn.innerText;
    let computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(humanSelection);
    console.log(computerSelection);

})

paperBtn.addEventListener("click",()=> {
    let humanSelection = paperBtn.innerText;
    let computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(humanSelection);
    console.log(computerSelection);

})

scissorBtn.addEventListener("click",()=>{
    let humanSelection = scissorBtn.innerText;
    let computerSelection = getComputerChoice();    
    playRound(humanSelection,computerSelection);
   
})















































































// function getHumanChoice(){
//     let input = prompt(" Enter your choice from 'Rock' 'Paper' and 'Scissor' ");
//     return input;
// }


// function playGame(){

    
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();
//     playRound(humanSelection,computerSelection);

//     humanSelection = getHumanChoice();
//     computerSelection = getComputerChoice();
//     playRound(humanSelection,computerSelection);

//     humanSelection = getHumanChoice();
//     computerSelection = getComputerChoice();
//     playRound(humanSelection,computerSelection);

//     humanSelection = getHumanChoice();
//     computerSelection = getComputerChoice();
//     playRound(humanSelection,computerSelection);

//     humanSelection = getHumanChoice();
//     computerSelection = getComputerChoice();
//     playRound(humanSelection,computerSelection);

//     alert(` Your Score ${ humanScore } Computer Score ${ computerScore} and Match tied ${tieScore} `);
// }

// playGame();