import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-2">A Warm Welcome!</h1>
			<p className="lead font-weight-normal">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to action!
			</a>
		</div>
	);
}