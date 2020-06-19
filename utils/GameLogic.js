const choices = {
    rock: { name: "rock", defeats: ["scissors", "lizard"], phrases: ["crushes", "crushes"] },
    paper: { name: "paper", defeats: ["rock", "spock"], phrases: ["covers", "disproves"] },
    scissors: { name: "scissors", defeats: ["paper", "lizard"], phrases: ["cuts", "decapitates"] },
    lizard: { name: "lizard", defeats: ["paper", "spock"], phrases: ["eats", "poisons"] },
    spock: { name: "spock", defeats: ["scissors", "rock"], phrases: ["smashes", "vaporizes"] }
};

export const computerSelect = () => {

    return ['rock', 'paper', 'scissors', 'lizard', 'spock'][Math.floor(Math.random() * 5)]

}

export const selectIcon = (selected) => {
    switch (selected) {
        case 'rock':
            return require('../assets/Rock.png')
        case 'paper':
            return require('../assets/Paper.png')
        case 'scissors':
            return require('../assets/Scissors.png')
        case 'lizard':
            return require('../assets/Lizard.png')
        case 'spock':
            return require('../assets/Spock.png')
        default:
            return require('../assets/error.png')

    }
}


export const determineWinner = (playerChoice, computerChoice) => {


    computerChoice = choices[computerChoice]
    playerChoice = choices[playerChoice]
    if (playerChoice.name === computerChoice.name) return 'Tie'


    const victory = playerChoice.defeats.indexOf(computerChoice.name) > -1

    if (victory) {
        let victoryIndex = playerChoice.defeats.indexOf(computerChoice.name)

        return `Victory! ${playerChoice.name} ${playerChoice.phrases[victoryIndex]} ${computerChoice.name}`
    } else {
        let defeatIndex = computerChoice.defeats.indexOf(playerChoice.name)

        return `Defeat! ${computerChoice.name} ${computerChoice.phrases[defeatIndex]} ${playerChoice.name}`
    }

}


