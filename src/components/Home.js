import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
return (
	<div>
	<br />
	<ul>
		<li>
		{/* Endpoint to route to Home component */}
		<Link to="/">Home</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/platinum"></Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/contactus">Contact Us</Link>
		</li>
	</ul>
	</div>
);
};

export default Home;
