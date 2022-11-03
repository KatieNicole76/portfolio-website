import "./App.css";
import "./design_system.css";
import React from "react";
import Header from "./Components/Header.js";
import About from "./Components/About.js";
import background from "./Images/Large-Green.png";

function App() {
	return (
		<div className="App" style={{ backgroundImage: `url(${background})` }}>
			<Header></Header>
			<div className="flex-row">
				<div className="side_nav flex-column">
					<p>+</p>
					<p>+</p>
					<p>+</p>
					<p>+</p>
				</div>
				<About></About>
			</div>
		</div>
    );
}

export default App;
