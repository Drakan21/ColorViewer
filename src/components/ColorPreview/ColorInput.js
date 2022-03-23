function ColorInput({ color, setColor }) {
	return (
		<input
			className="colorInput"
			type="text"
			onInput={(e) => setColor(e.target.value)}
			value={color}
			placeholder="Color Name, Value"
		/>
	);
}

export default ColorInput;
