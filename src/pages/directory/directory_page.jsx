import { useState } from "react";
import { useDebounce } from "use-debounce";
import { Filters } from "./components/filters/filters";
import { GamesGrid } from "./components/games/games_grid";
import { ScrollArea } from "../../ui/scroll_area";
import { GamesGridSkeleton } from "./components/games/components/games_grid_skeleton";
import { useGamesQuery } from "../../hooks/queries/games/use_games_query";
import { useIsMobile } from "../../hooks/ui/use_is_mobile";
import { Button } from "../../ui/button";
import { FiltersMobile } from "./components/filters/filters_mobile";

export function DirectoryPage() {
	const [filters, setFilters] = useState({
		search: "",
		genres: [],
		live: false,
	});

	const isMobile = useIsMobile();

	const [debouncedSearch] = useDebounce(filters.search, 500);

	const gamesQuery = useGamesQuery({
		...filters,
		search: debouncedSearch,
	});

	const filtersComponent = (
		<Filters onFiltersChange={setFilters} filters={filters} />
	);

	return (
		<div className="flex flex-col lg:flex-row relative h-full">
			{isMobile ? (
				<FiltersMobile>{filtersComponent}</FiltersMobile>
			) : (
				filtersComponent
			)}
			<ScrollArea className="flex-1 h-screen overflow-y-auto box-border py-4">
				{!gamesQuery.isLoading && !gamesQuery.isError ? (
					<GamesGrid games={gamesQuery.data} />
				) : null}
				{gamesQuery.isLoading || gamesQuery.isFetching ? (
					<GamesGridSkeleton />
				) : null}
				{gamesQuery.isError ? (
					<p className="text-center text-red-500 text-sm">
						Failed to load games. Please refresh page to try again.
					</p>
				) : null}
				{gamesQuery?.data?.length === 0 ? (
					<p className="text-foreground text-center text-sm px-6">
						We couldn't find any games that matched your search. Please change
						your filters and try again.
					</p>
				) : null}
			</ScrollArea>
		</div>
	);
}

DirectoryPage.displayName = "DirectoryPage";
