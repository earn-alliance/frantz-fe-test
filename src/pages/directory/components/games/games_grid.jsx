import { GameCard } from "./components/game_card";

export function GamesGrid({ games }) {
	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-full pt-4 lg:pt-6 px-4 lg:px-6 pb-12">
			{games.map((game) => (
				<GameCard key={game.id} game={game} />
			))}
		</ul>
	);
}
