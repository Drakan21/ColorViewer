import React from "react";
import { FiClipboard } from "react-icons/fi";

function ColorSlideOut({ rgb, hsl, hex, handleCopyValue }) {
	return (
		<div className="colorValues" title="Double-click to copy value">
			<p
				className="colorValue cvRGB"
				onDoubleClick={() => handleCopyValue(rgb)}
				style={{
					borderColor: `${rgb}`,
				}}
			>
				{rgb} :: RGB
			</p>
			<p
				className="colorValue cvHSL"
				onDoubleClick={() => handleCopyValue(hsl)}
				style={{
					borderColor: `${rgb}`,
				}}
			>
				{hsl} :: HSL
			</p>
			<p
				className="colorValue cvHEX"
				onDoubleClick={() => handleCopyValue(hex)}
				style={{
					borderColor: `${rgb}`,
				}}
			>
				{hex} :: HEX
			</p>
			<FiClipboard className="copyColorBtn" onClick={() => handleCopyValue()} />
		</div>
	);
}

export default ColorSlideOut;
