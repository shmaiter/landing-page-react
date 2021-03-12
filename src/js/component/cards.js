import React from "react";

export function Cards() {
	return (
		<div className="card-deck mb-5 ">
			<div className="card text-center">
				<img
					src="https://loremflickr.com/320/240?random=1"
					className="card-img-top"
					alt="..."></img>
				<div className="card-body">
					<h5 className="card-title">Card Title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Praesent id dignissim purus. Suspendisse mauris eros,
						bibendum quis gravida a, varius quis risus. Vestibulum
						massa tellus, eleifend a nisl non, egestas malesuada
						ante.
					</p>
				</div>
				<div className="card-footer bg-white">
					<a href="#" className="btn btn-primary btn-sm">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}
