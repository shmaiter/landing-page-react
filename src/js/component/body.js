import React from "react";

//import jumbotron
import { Jumbotron } from "./jumbotron.js";

//import cards
import { Cards } from "./cards.js";

export function Body() {
	return (
		<div className="p-3">
			<Jumbotron />
			<Cards />
		</div>
	);
}
