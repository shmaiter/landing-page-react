import React from "react";

//import navbar
import { Navbar } from "./navbar.js";

//import navbar
import { Body } from "./body.js";

//import navbar
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Body />
			<Footer />
		</>
	);
}
