import React from "react";

export default function Die({ value, isFrozen, holdDice }) {
	return (
		<div
			className={`${isFrozen ? "isFrozen" : "dice"} `}
			onClick={holdDice}
		>
			<p>{value}</p>
		</div>
	);
}
