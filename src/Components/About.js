import React from "react";

export default function About() {
	return (
		<div className="about_content">
			<div className="about body-2">
				<p>Hi There! My name is</p>
				<h1>Katie Kaiser</h1>
				<h2>
					I'm a Software Engineer with a love for beautiful design.
				</h2>
				<div className="body_text margin-top-32px">
					<span className="margin-top-24px body_text">
						Based in Cuyahoga Falls, OH. Currently a Full Stack
						Developer/Designer for{" "}
					</span>
					<a  target="_blank"
						href="https://goqwickly.com"
						className="link">
						Qwickly
					</a>
					<span>. Painter in my spare time.</span>
				</div>
			</div>
			<div className="flex-row">
				<a href="./documents/Kaitlyn_Kaiser_Resume.pdf" download>Download</a>		
			</div>
			</div>
	);
}
