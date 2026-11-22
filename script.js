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
    if (player_score === 5 || computer_score === 5){
        if (player_score > computer_score){
            alert('Player wins the game!');
        } else {
            alert('Computer wins the game!');
        }
        player_score = 0;
        computer_score = 0;
    }
    else {
        if (player_score > computer_score){
            console.log('Player won round');
            round_results.textContent = 'Player won round';
        } else if (player_score < computer_score){
            console.log('Computer won round');
            round_results.textContent = 'Computer won round';
        } else {
            console.log('Tied round');
            round_results.textContent = 'Tied round';
        }
    }
    console.log(`Player score: ${player_score}\nComputer score: ${computer_score}`);
    results.textContent = `Player Score : ${player_score} Computer Score: ${computer_score}`;
}

buttons.addEventListener('click', () =>{
    console.log('Clicked button', event.target.id);
    let choice = String(event.target.id);
    playGame(choice);
})

