import { nanoid } from "nanoid";

export function generateNewDie() {
	return {
		value: Math.ceil(Math.random() * 6),
		isFrozen: false,
		id: nanoid(),
	};
}

export function allNewDice() {
	let diceArray = [];
	for (let i = 0; i < 10; i++) {
		diceArray.push(generateNewDie());
	}
	return diceArray;
}
