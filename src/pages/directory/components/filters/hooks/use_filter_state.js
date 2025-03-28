export function useFilterState(filters, onFiltersChange) {
	return {
		liveState: {
			value: filters.live ? "live" : "not-live",
			onChange: (live) =>
				onFiltersChange({ ...filters, live: live === "live" }),
		},
		searchState: {
			value: filters.search,
			onChange: (event) =>
				onFiltersChange({ ...filters, search: event.target.value }),
		},
		genresState: {
			value: filters.genres,
			isChecked: (genre) => filters.genres.includes(genre),
			onChange: (checked, genre) => {
				if (checked) {
					onFiltersChange({
						...filters,
						genres: [...filters.genres, genre],
					});
				} else {
					onFiltersChange({
						...filters,
						genres: filters.genres.filter((g) => g !== genre),
					});
				}
			},
		},
	};
}
