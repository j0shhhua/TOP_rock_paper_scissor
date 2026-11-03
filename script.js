let player_score = 0;
let computer_score = 0;
let options = ['rock', 'paper', 'scissor'];

function isValid(choice){
    if (typeof choice !== 'string'){
        return false;
    }
    return options.includes(choice.toLowerCase());
}

function getComputerChoice(){
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

function getHumanChoice(){
    let choice = window.prompt("Rock, paper, or scissor?\n");``
    return choice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) return 'tie';
    const beats = {rock: 'scissor', paper: 'rock', scissor: 'paper'};

    if (beats[humanChoice]===computerChoice){
        player_score++;
        return 'win';
    } else {
        computer_score++;
        return 'lose';
    }
}


let choice = getHumanChoice();
while (!isValid(choice)){
    alert('Not a valid choice...')
    choice = getHumanChoice();
}
let player = choice.toLowerCase();
let comp = getComputerChoice();
alert(`${playRound(player, comp)}\ncurrent score\nYou:${player_score} Computer:${computer_score}`);

