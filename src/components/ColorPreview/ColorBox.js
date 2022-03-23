import React from "react";

import ColorBlock from "./ColorBlock";
import ColorSlideOut from "./ColorSlideOut";

function ColorBox({ selectedColor, styleObj, handleCopyValue, handleSaveSwatch }) {
	return (
		<section className="colorBox">
			<p className="notify"></p>
			<ColorSlideOut
				rgb={selectedColor?.rgb}
				hsl={selectedColor?.hsl}
				hex={selectedColor?.hex}
				handleCopyValue={handleCopyValue}
			/>
			<ColorBlock
				styleObj={styleObj}
				selectedColor={selectedColor}
				handleSaveSwatch={handleSaveSwatch}
			/>
		</section>
	);
}

export default ColorBox;
