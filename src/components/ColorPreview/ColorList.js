import React from "react";
import ColorSwatch from "./ColorSwatch";

function ColorList({ swatches, handleSelectColor }) {
	return (
		<ul className="colorList">
			{swatches.map((c) => (
				<ColorSwatch key={c.id} color={c} handleSelectColor={handleSelectColor} />
			))}
		</ul>
	);
}

export default ColorList;
