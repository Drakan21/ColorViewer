import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

import "./App.css";

import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useState } from "react";

const App = () => {
	const [theme, setTheme] = useState("dark");

	return (
		<main className={`App ${theme === "dark" ? "" : "light"}`}>
			<button
				title={`Toggle ${theme === "dark" ? "Light" : "Dark"} Mode`}
				className="themeBtn"
				aria-label={`Toggle theme to ${theme === "dark" ? "light" : "dark"} mode.`}
				onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
			>
				{theme === "light" ? <FaToggleOff /> : <FaToggleOn />}
			</button>
			<Header title="Color Viewer" />
			<Content />
			<Footer />
		</main>
	);
};

export default App;
