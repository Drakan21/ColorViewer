import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./ColorPreview.css";

import { useColorScript } from "../../hooks/useColorScript";
import ColorList from "./ColorList";
import ColorInput from "./ColorInput";
import ColorBox from "./ColorBox";

function ColorPreview() {
	const defaultColor = "whitesmoke";
	const [color, setColor] = useState(defaultColor);

	const [swatches, setSwatches] = useState([]);
	const [selColor, setSelColor] = useState();
	const [styleObj, setStyleObj] = useState({ backgroundColor: defaultColor });

	const initSwatches = (e) => {
		const icarr = [
			"white",
			"lightgray",
			"darkgray",
			"gray",
			"black",
			"red",
			"orange",
			"yellow",
			"green",
			"blue",
		];
		const iswt = [];
		icarr.forEach((c) => {
			const co = colorObjFromValue(c);
			iswt.push(co);
		});
		setSwatches(iswt);
		setSelColor(iswt[0]);
		setColor(iswt[0].name);
	};

	useColorScript("https://www.w3schools.com/lib/w3color.js", initSwatches);

	const colorObjFromValue = (value) => {
		const w3 = window.w3color(value);
		const cobj = {
			id: uuidv4(),
			name: w3.toName() ? w3.toName() : w3.toHexString(),
			hex: w3.toHexString(),
			rgb: w3.toRgbaString(),
			hsl: w3.toHslString(),
			w3,
		};
		return cobj;
	};

	const styleObjFromValue = (value) => {
		return {
			backgroundColor: `${value}`,
		};
	};

	const handleSelectColor = (colorObj) => {
		setColor(colorObj.name);
		setSelColor(colorObj);
		setStyleObj(styleObjFromValue(colorObj.hex));
	};

	const handleSaveSwatch = (value) => {
		let nswatches = [...swatches, colorObjFromValue(value ? value.name : defaultColor)];
		if (swatches.length >= 20) nswatches.shift();
		setSwatches(nswatches);
	};

	const handleCopyValue = async (value) => {
		const val = `"${value ? value : selColor.hex}" copied`;
		const not = document.querySelector(".notify");
		await navigator.clipboard
			.writeText(`${value ? value : selColor.hex}`)
			.then(
				() => {
					not.textContent = val;
					not.classList.add("show");
					not.classList.remove("hide");
				},
				(e) => console.error(e)
			)
			.finally(() => {
				setTimeout(() => {
					not.classList.add("hide");
					not.classList.remove("show");
				}, 2500);
			});
	};

	useEffect(() => {
		const _timeddb = setTimeout(() => {
			const val = color ? color : swatches[0].name;
			const nc = colorObjFromValue(val);
			if (nc) {
				// setColor(val);
				setSelColor(nc);
				setStyleObj(styleObjFromValue(nc.hex));
			}
		}, 500);
		return () => clearTimeout(_timeddb);
	}, [color, swatches]);

	return (
		<section className="colorPreview">
			<ColorBox
				selectedColor={selColor}
				styleObj={styleObj}
				handleCopyValue={handleCopyValue}
				handleSaveSwatch={handleSaveSwatch}
			/>
			<ColorInput color={color} setColor={setColor} />
			<ColorList swatches={swatches} handleSelectColor={handleSelectColor} />
		</section>
	);
}

export default ColorPreview;
