import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

export default function App() {
	const [dice, setDice] = React.useState(allNewDice());

	function getRandomInt(max) {
		return Math.ceil(Math.random() * max);
	}

	function generateNewDie() {
		return {
			value: getRandomInt(6),
			isHeld: false,
			id: nanoid(),
		};
	}

	function allNewDice() {
		let diceArray = [];
		for (let i = 0; i < 10; i++) {
			diceArray.push(generateNewDie());
		}
		return diceArray;
	}

	function rollNewDice() {
		setDice((prevDice) =>
			prevDice.map((die) => {
				return die.isFrozen ? die : generateNewDie();
			})
		);
	}

	function holdDice(id) {
		setDice((prevDice) =>
			prevDice.map((die) => {
				return die.id === id
					? { ...die, isFrozen: !die.isFrozen }
					: die;
			})
		);
	}

	const diceElements = dice.map((die) => (
		<Die
			holdDice={() => holdDice(die.id)}
			key={die.id}
			value={die.value}
			isFrozen={die.isFrozen}
		/>
	));

	return (
		<main>
			<p className="gameDescription">
				Roll until all dice are the same. Click each die to freeze it at
				its current value between rolls. Try to get the fastest time!
			</p>
			<div className="wrapper__dice">{diceElements}</div>
			<button className="button__dice" onClick={rollNewDice}>
				Roll dice
			</button>
		</main>
	);
}
