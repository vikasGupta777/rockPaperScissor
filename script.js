

function getComputerChoice(){
    let random =  Math.floor(Math.random() * 3);
    alert(random);
    if( random == 0 ){
        return "Rock";
    }else if(random == 1){
        return "Paper";
    }else{
        return "Scissor";
    }
}

console.log(getComputerChoice());