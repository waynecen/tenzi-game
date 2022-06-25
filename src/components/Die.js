import React from "react";

export default function Die({ value, isFrozen, holdDice }) {
	return (
		<div className={`${isFrozen ? "isFrozen" : "dice"}`} onClick={holdDice}>
			{value === 1 && (
				<div className={`--${value}`}>
					<span className="dot"></span>
				</div>
			)}
			{value === 2 && (
				<div className={`--${value}`}>
					<span className="dot"></span>
					<span className="dot"></span>
				</div>
			)}
			{value === 3 && (
				<div className={`--${value}`}>
					<span className="dot"></span>
					<span className="dot"></span>
					<span className="dot"></span>
				</div>
			)}
			{value === 4 && (
				<div className={`--${value}`}>
					<div className="column">
						<span className="dot"></span>
						<span className="dot"></span>
					</div>
					<div className="column">
						<span className="dot"></span>
						<span className="dot"></span>
					</div>
				</div>
			)}
			{value === 5 && (
				<div className={`--${value}`}>
					<div className="column">
						<span className="dot"></span>
						<span className="dot"></span>
					</div>

					<div className="column">
						<span className="dot"></span>
					</div>

					<div className="column">
						<span className="dot"></span>
						<span className="dot"></span>
					</div>
				</div>
			)}
			{value === 6 && (
				<div className={`--${value}`}>
					<div className="column">
						<span className="dot"></span>
						<span className="dot"></span>
						<span className="dot"></span>
					</div>
					<div className="column">
						<span className="dot"></span>
						<span className="dot"></span>
						<span className="dot"></span>
					</div>
				</div>
			)}
		</div>
	);
}
