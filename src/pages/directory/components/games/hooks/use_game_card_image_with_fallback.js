import { useEffect, useState } from "react";

export const useGameCardImageWithFallback = (imageUrl, gifUrl) => {
	const [errors, setErrors] = useState({
		image: false,
		gif: false,
	});

	function onError(type) {
		setErrors((current) => ({ ...current, [type]: true }));
	}

	return { onError, errors };
};
