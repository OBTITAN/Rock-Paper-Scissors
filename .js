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
    
    return computerMove
}

const getHumanChoice = () => {
    let humanMove = prompt("Please enter either rock, paper or scissors to play")
    humanMove = humanMove.toLowerCase()
    return humanMove
}





const playGame = () => {

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    if(humanChoice == 'rock' && computerChoice == 'scissors' ){
        console.log(`Human Wins, ${humanChoice} beats ${computerChoice}`)
        humanChoice += 1
    }
    else if(humanChoice == 'scissors' && computerChoice == 'paper'){
         console.log(`Human Wins, ${humanChoice} beats ${computerChoice}`)
         humanChoice += 1
    }
    else if(humanChoice == 'paper' && computerChoice == 'rock'){
         console.log(`Human Wins, ${humanChoice} beats ${computerChoice}`)
         humanChoice += 1
    }
    else if(humanChoice == 'scissors' && computerChoice == 'rock'){
        console.log(`Computer Wins, ${computerChoice} beats ${humanChoice}`)
        computerChoice += 1
    }
    else if(humanChoice == 'paper' && computerChoice == 'scissors'){
        console.log(`Computer Wins, ${computerChoice} beats ${humanChoice}`)
        computerChoice += 1
    }
    else if(humanChoice == 'rock' && computerChoice == 'paper'){
        console.log(`Computer Wins, ${computerChoice} beats ${humanChoice}`)
        computerChoice += 1
    }
    else{
        console.log(`It's a draw`)
        computerChoice += 0
        humanChoice += 0
    }
}

for(let round = 1; round < 6; round++){
playRound(getHumanChoice(), getComputerChoice())
}

}

playGame();
