import { useAllGameGenres } from "../../../../hooks/queries/game_genres/use_all_game_genres_query";
import { Checkbox } from "../../../../ui/checkbox";
import { toSentenceCase } from "../../../../utils/to_sentence_case_util";
import { FilterGroup } from "./components/filter_group";
import { ScrollArea } from "../../../../ui/scroll_area";
import { Input } from "../../../../ui/input";
import { useFilterState } from "./hooks/use_filter_state";
import { ToggleGroup, ToggleGroupItem } from "../../../../ui/toggle_group";
import { Spinner } from "../../../../ui/spinner";

export function Filters({ onFiltersChange, filters }) {
	const allGameGenresQuery = useAllGameGenres();

	const { searchState, genresState, liveState } = useFilterState(
		filters,
		onFiltersChange,
	);

	return (
		<ScrollArea className="flex flex-col box-border lg:p-6 lg:border-r border-r-input h-screen w-full md:max-w-xs overflow-y-auto top-0">
			<div className="pb-4 sticky top-0 bg-black z-[1]">
				<h2 className="text-2xl font-medium">Filters</h2>
			</div>

			<FilterGroup label="Filter by live games" />

			<ToggleGroup
				type="single"
				onValueChange={liveState.onChange}
				value={liveState.value}
			>
				<ToggleGroupItem value="live">Live</ToggleGroupItem>
				<ToggleGroupItem value="not-live">Not Live</ToggleGroupItem>
			</ToggleGroup>

			<FilterGroup label="Search games" />

			<div className="px-px box-border">
				<Input
					placeholder="Search by game name"
					value={searchState.value}
					onChange={searchState.onChange}
				/>
			</div>

			<FilterGroup label={`Filter by genre (${filters.genres.length} active)`}>
				{({ showAll }) => {
					const genres = showAll
						? allGameGenresQuery?.data
						: allGameGenresQuery?.data?.slice(0, 5);

					if (allGameGenresQuery.isError) {
						return (
							<p className="text-red-500 text-xs py-3 text-center">
								Failed to load genres. Please refresh page to try again.
							</p>
						);
					}

					if (allGameGenresQuery.isLoading) {
						return <Spinner />;
					}

					return (
						<div className="flex flex-col gap-3 py-4 categories">
							{genres?.map((genre) => (
								<label
									className="flex items-center space-x-3 cursor-pointer w-full"
									htmlFor={genre.genre_name}
									key={genre.genre_name}
								>
									<Checkbox
										className="w-5 h-5"
										id={genre.genre_name}
										checked={genresState.isChecked(genre.genre_name)}
										onCheckedChange={(checked) =>
											genresState.onChange(checked, genre.genre_name)
										}
									/>
									<span className="text-sm text-white">
										{toSentenceCase(genre.genre_name)}
									</span>
								</label>
							))}
						</div>
					);
				}}
			</FilterGroup>
		</ScrollArea>
	);
}

Filters.displayName = "Filters";
