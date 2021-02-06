import React, { useState } from "react";
import Header from "./Header";
import "./CardGame.css";
import win from "../photo/Win.gif";
import lose from "../photo/try again.gif";
import { findAllByText } from "@testing-library/react";

function CardGame() {
	const [you, setYou] = useState("");
	const [comp, setComp] = useState("");
	const [congrat, setCongrat] = useState(false);
	const [beforeCongrat, setBeforeCongrat] = useState(false);

	const computer = Math.floor(Math.random() * 2);
	console.log("computer choose" + computer);
	let youChoose = "";

	const Result = () => {
		if (computer === 0 && youChoose === 0) {
			setYou("Blue");
			setComp("Blue");
			setBeforeCongrat(true);
			setCongrat(true);
		} else if (computer === 1 && youChoose === 1) {
			setYou("Red");
			setComp("Red");
			setBeforeCongrat(true);
			setCongrat(true);
		} else if (computer === 0 && youChoose === 1) {
			setYou("Blue");
			setComp("Bed");
			setBeforeCongrat(true);
			setCongrat(false);
		} else {
			setYou("Blue");
			setComp("Red");
			setBeforeCongrat(true);
			setCongrat(false);
		}
	};

	const Card = () => {
		return (
			<div
				className="Card1"
				onClick={() => {
					Result();
					youChoose = 0;
					console.log("you Choose" + youChoose);
				}}>
				<div className="Card2">Blue</div>
			</div>
		);
	};

	const Card2 = () => {
		return (
			<div
				className="Card3"
				onClick={() => {
					Result();
					youChoose = 1;
					console.log("you Choose" + youChoose);
				}}>
				<div className="Card4">Red</div>
			</div>
		);
	};

	return (
		<div className="CArdGame">
			<Header />
			<div className="result">
				{/* style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bolder" }}>
				Choose a card  */}
				<center className="Result">
					<div className="response">
						<h4>you Choose:{you}</h4>
						<h4>computer Choose:{comp}</h4>
					</div>
				</center>
			</div>
			<div className="CardHolder">
				<Card />
				<Card2 />
			</div>

			<center style={{ marginTop: "20px" }}>
				<button
					className="button"
					onClick={() => {
						setYou("");
						setComp("");

						setBeforeCongrat(false);
					}}>
					Reset
				</button>
			</center>
			{beforeCongrat ? (
				congrat ? (
					<center className="Gif">
						<img src={win} className="GifImage" />
					</center>
				) : (
					<center className="Gif">
						<img src={lose} className="GifImage" />
					</center>
				)
			) : (
				<center className="Gif"></center>
			)}
		</div>
	);
}

export default CardGame;
