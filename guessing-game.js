function guessingGame() {
	const ANSWER = Math.floor(Math.random() * 100);
	let done = false;
	let numGuesses = 0;

	return function guess(num) {
		if (done) return "Game over, you won!";
		numGuesses++;
		if (num === ANSWER) {
			done = true;
			const guess = numGuesses === 1 ? "guess" : "guesses";
			return `You win! You found ${num} in ${numGuesses} ${guess}.`;
		}
		if (num < ANSWER) return `${num} is too low!`;
		if (num > ANSWER) return `${num} is too high!`;
	};
}

module.exports = { guessingGame };
