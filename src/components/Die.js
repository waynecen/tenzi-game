import React from "react";

export default function Die({ value, isFrozen, holdDice }) {
	return (
		<div className={`${isFrozen ? "isFrozen" : "dice"}`} onClick={holdDice}>
			{value === 1 && (
				<div className={`--${value}`}>
					<span class="dot"></span>
				</div>
			)}
			{value === 2 && (
				<div className={`--${value}`}>
					<span class="dot"></span>
					<span class="dot"></span>
				</div>
			)}
			{value === 3 && (
				<div className={`--${value}`}>
					<span class="dot"></span>
					<span class="dot"></span>
					<span class="dot"></span>
				</div>
			)}
			{value === 4 && (
				<div className={`--${value}`}>
					<div className="column">
						<span class="dot"></span>
						<span class="dot"></span>
					</div>
					<div className="column">
						<span class="dot"></span>
						<span class="dot"></span>
					</div>
				</div>
			)}
			{value === 5 && (
				<div className={`--${value}`}>
					<div class="column">
						<span class="dot"></span>
						<span class="dot"></span>
					</div>

					<div class="column">
						<span class="dot"></span>
					</div>

					<div class="column">
						<span class="dot"></span>
						<span class="dot"></span>
					</div>
				</div>
			)}
			{value === 6 && (
				<div className={`--${value}`}>
					<div className="column">
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
					</div>
					<div className="column">
						<span class="dot"></span>
						<span class="dot"></span>
						<span class="dot"></span>
					</div>
				</div>
			)}
			{/* <p>{value}</p> */}
		</div>
	);
}
