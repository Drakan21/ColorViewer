import { useEffect, useRef } from "react";

const useColorScript = (url, func) => {
	const loaded = useRef(false);
	useEffect(() => {
		let script;
		if (!loaded.current) {
			script = document.createElement("script");
			script.addEventListener("load", (e) => {
				loaded.current = true;
				func(e);
			});
			script.src = url;
			script.async = true;
			document.body.appendChild(script);
		}
		return () => {
			if (script) document.body.removeChild(script);
		};
	}, [url, func]);
};

export { useColorScript };
