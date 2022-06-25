import React from "react";
import Die from "./components/Die";
import Confetti from "react-confetti";
import { generateNewDie, allNewDice } from "./helper";

export default function App() {
	const [dice, setDice] = React.useState(allNewDice());
	const [tenzies, setTenzies] = React.useState(false);
	const [rollCount, setRollCount] = React.useState(0);
	const [time, setTime] = React.useState(0);
	const [bestTime, setBestTime] = React.useState(
		JSON.parse(localStorage.getItem("bestTime")) || []
	);

	React.useEffect(() => {
		const allFrozen = dice.every((die) => die.isFrozen);
		const firstValue = dice[0].value;
		const allSameValue = dice.every((die) => die.value === firstValue);

		if (allFrozen && allSameValue) {
			setTenzies(true);
		}
	}, [dice]);

	React.useEffect(() => {
		if (!tenzies) {
			let tick = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
			return () => {
				clearInterval(tick);
			};
		} else {
			setTime((prevTime) => prevTime);
		}
	}, [tenzies]);

	React.useEffect(() => {
		const currentBestTime = localStorage.getItem("bestTime");
		if (tenzies) {
			if (!currentBestTime) {
				localStorage.setItem("bestTime", JSON.stringify(time));
			} else if (time < currentBestTime) {
				setBestTime(time);
			}
		}
	}, [tenzies, time]);

	function rollNewDice() {
		if (!tenzies) {
			setDice((prevDice) =>
				prevDice.map((die) => {
					return die.isFrozen ? die : generateNewDie();
				})
			);
			setRollCount((prevCount) => prevCount + 1);
		} else {
			setTenzies(false);
			setRollCount(0);
			setDice(allNewDice());
			setTime(0);
			setBestTime(localStorage.getItem("bestTime"));
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
			clicked={() => console.log("clicked")}
		/>
	));

	return (
		<main>
			{tenzies && <Confetti />}
			<h1 className="title">Tenzi</h1>
			<p className="gameDescription">
				Roll until all dice are the same. Click each die to freeze it at
				its current value between rolls. <br></br> Try to get the
				fastest time!
			</p>
			<div className="wrapper__stats flex-row">
				<h3 className="counter--roll">
					Rolls
					<p>{rollCount}</p>
				</h3>
				<h3 className="bestTimer">
					Best Time
					<p>{bestTime}s</p>
				</h3>
				<h3 className="timer">
					Time
					<p>{time}s</p>
				</h3>
			</div>
			<div className="wrapper__dice">{diceElements}</div>
			<button className="button__dice" onClick={rollNewDice}>
				{tenzies ? "New Game" : "Roll dice"}
			</button>
		</main>
	);
}
