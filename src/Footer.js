import React from "react";

const Footer = ({ length }) => {
	const today = new Date();
	return (
		<footer>
			<p>
				<small>
					Copyright &copy; {today.getFullYear()} | Project by{" "}
					<a
						href="https://github.com/Drakan21"
						target="_blank"
						rel="noreferrer"
						aria-label="Navigate to Drakan21 profile on GitHub"
					>
						Drakan21
					</a>
				</small>
			</p>
			<p>
				<small>
					Built with{" "}
					<a
						href="https://www.reactjs.org"
						target="_blank"
						rel="noreferrer"
						aria-label="Navigate to ReactJS.org home page"
					>
						ReactJS
					</a>{" "}
					employing{" "}
					<a
						href="https://www.w3schools.com/colors/colors_converter.asp"
						target="_blank"
						rel="noreferrer"
						aria-label="Navigate to w3schools colors converter page"
					>
						w3color script
					</a>
				</small>
			</p>
		</footer>
	);
};

Footer.defaultProps = {
	length: 0,
};

export default Footer;
