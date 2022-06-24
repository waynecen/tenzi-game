import React from "react";
import Die from "./components/Die";

function App() {
	return (
		<main>
			<p className="gameDescription">
				Roll until all dice are the same. Click each die to freeze it at
				its current value between rolls.
			</p>
			<div className="rowOne flex-row">
				<Die value="1" />
				<Die value="2" />
				<Die value="3" />
				<Die value="4" />
				<Die value="5" />
			</div>
			<div className="rowTwo flex-row">
				<Die value="5" />
				<Die value="6" />
				<Die value="5" />
				<Die value="4" />
				<Die value="3" />
			</div>
		</main>
	);
}

export default App;
