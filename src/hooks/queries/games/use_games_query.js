import { useQuery } from "@tanstack/react-query";
import { GameService } from "../../../services/game_service";

export function useGamesQuery(filters) {
	return useQuery({
		queryKey: ["games", filters.search, filters.live, filters.genres],
		async queryFn() {
			return new GameService().filter(filters);
		},
	});
}
