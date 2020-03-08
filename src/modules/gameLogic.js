import Chance from 'chance';

let computerWins = "Better luck next time."
let tie = "It's a tie. Try again!"
let playerWins = "Congratulations, you win!"

const computerSelection = () => {
	let chance = new Chance()
	let selection = chance.pickone(['rock', 'paper', 'scissors'])
	return selection;
};


const game = (player, computer) => {
	let result;
	switch ([player, computer].join()) {
		case ['rock', 'scissors'].join():
		case ['scissors', 'paper'].join():
		case ['paper', 'rock'].join():
			result = playerWins
			break;
		case ['scissors', 'rock'].join():
		case ['paper', 'scissors'].join():
		case ['rock', 'paper'].join():
			result = computerWins
			break;
		default:
			result = tie
			break;
	}
	return result
};


export {computerSelection, game, };