let player_score = 0;
let computer_score = 0;
let options = ['rock', 'paper', 'scissor'];
const buttons = document.getElementById('button_grp');
const results = document.getElementById('results');


function getComputerChoice(){
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) return 'tie';
    // Hash map for easy reference on win / lose scenarios
    const beats = {rock: 'scissor', paper: 'rock', scissor: 'paper'};

    if (beats[humanChoice]===computerChoice){
        player_score++;
        return 'win';
    } else {
        computer_score++;
        return 'lose';
    }
}

function playGame(choice){
    let player = choice;
    let comp = getComputerChoice();
    playRound(player, comp);
    console.log(`Player score: ${player_score}\nComputer score: ${computer_score}`);
    results.textContent = `Player Score : ${player_score} Computer Score: ${computer_score}`;
}

buttons.addEventListener('click', () =>{
    console.log('Clicked button', event.target.id);
    let choice = String(event.target.id);
    playGame(choice);
})

