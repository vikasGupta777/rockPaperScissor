

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

function gethumanChoice(){
    let input = prompt(" Enter your choice from 'Rock' 'Paper' and 'Scissor' ");
    console.log(input);
    input = input[0].toUpperCase() + input.slice(1);
    return input;
}

