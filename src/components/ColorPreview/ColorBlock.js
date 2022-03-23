import React from "react";
import { FaSwatchbook } from "react-icons/fa";

function ColorBlock({ styleObj, selectedColor, handleSaveSwatch }) {
	return (
		<div className="colorBlock" style={{ ...styleObj }}>
			<p>{(selectedColor?.name ? selectedColor?.name : selectedColor?.hex) ?? ""}</p>
			<button
				className="saveBtn"
				title="Save to Swatches"
				onClick={() => handleSaveSwatch(selectedColor)}
				aria-label={`Save ${selectedColor?.name} to the clipboard`}
			>
				<FaSwatchbook />
			</button>
		</div>
	);
}

export default ColorBlock;
