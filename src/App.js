import React from "react";
import Die from "./components/Die";
import Confetti from "react-confetti";
import { generateNewDie, allNewDice } from "./helper";

export default function App() {
	const [dice, setDice] = React.useState(allNewDice());
	const [tenzies, setTenzies] = React.useState(false);

	// Win condition
	React.useEffect(() => {
		const allFrozen = dice.every((die) => die.isFrozen);
		const firstValue = dice[0].value;
		const allSameValue = dice.every((die) => die.value === firstValue);
		if (allFrozen && allSameValue) {
			setTenzies(true);
		}
	}, [dice]);

	function rollNewDice() {
		if (!tenzies) {
			setDice((prevDice) =>
				prevDice.map((die) => {
					return die.isFrozen ? die : generateNewDie();
				})
			);
		} else {
			setTenzies(false);
			setDice(allNewDice());
		}
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
			{tenzies && <Confetti />}
			<h1 className="title">Tenzi</h1>
			<p className="gameDescription">
				Roll until all dice are the same. Click each die to freeze it at
				its current value between rolls. Try to get the fastest time!
			</p>
			<div className="wrapper__dice">{diceElements}</div>
			<button className="button__dice" onClick={rollNewDice}>
				{tenzies ? "New Game" : "Roll dice"}
			</button>
		</main>
	);
}
