const getComputerChoice = () => {
    let randomValue = Math.floor(Math.random()* 10);
    let computerMove;

    if(randomValue >= 0 && randomValue > 4){
        computerMove = 'rock'
    }
    else if(randomValue >= 4 && randomValue < 7){
        computerMove = 'scissors'
    }

    else{
        computerMove = 'paper'
    }
    
    console.log(computerMove)
}

const getHumanChoice = () => {
    let humanMove = prompt("Please enter either rock, paper or scissors to play")
    console.log(humanMove);

}



getHumanChoice();