function getComputerChoice(){
    let options = ['rock', 'paper', 'scissor'];
    let choice = Math.floor(Math.random() * options.length);
    return options[choice]
}

function getHumanChoice(){
    let choice = window.prompt("Rock, paper, or scissor?\n");
    return choice;
}


console.log(getHumanChoice())