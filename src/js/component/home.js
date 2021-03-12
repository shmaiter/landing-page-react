import React from "react";

//import navbar
import { Navbar } from "./navbar.js";

//import navbar
import { Body } from "./body.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Body />
		</div>
	);
}
