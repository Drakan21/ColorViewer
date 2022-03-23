import React from "react";

function ColorSwatch({ color, handleSelectColor }) {
	return (
		<li id={`${color.id}`}>
			<button
				className="colorBtn"
				title={color.w3.toName() ? color.w3.toName() : color.hex}
				style={{
					backgroundColor: `${color.hex}`,
					content: "\\200b",
				}}
				onClick={() => handleSelectColor(color)}
			></button>
		</li>
	);
}

export default ColorSwatch;
