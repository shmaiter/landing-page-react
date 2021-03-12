import React from "react";

let cardList = [];

for (let i = 0; i < 4; i++) {
	let imgSrc = `https://loremflickr.com/320/240?random=${i}`;
	cardList.push(
		<div className="card text-center">
			<img src={imgSrc} className="card-img-top" alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">Card Title</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Praesent id dignissim purus. Suspendisse mauris eros,
					bibendum quis gravida a, varius quis risus. Vestibulum massa
					tellus, eleifend a nisl non, egestas malesuada ante.
				</p>
			</div>
			<div className="card-footer bg-white">
				<a href="#" className="btn btn-primary btn-sm">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

export function Cards() {
	return <div className="card-deck mb-5 ">{cardList}</div>;
}
