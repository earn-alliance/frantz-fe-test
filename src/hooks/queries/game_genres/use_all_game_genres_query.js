import { useQuery } from "@tanstack/react-query";
import { GameGenreService } from "../../../services/game_genre_service";

export function useAllGameGenres() {
	return useQuery({
		queryKey: ["game_genres"],
		async queryFn() {
			return new GameGenreService().all();
		},
	});
}
