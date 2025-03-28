import { GameCardSkeleton } from "./game_card_skeleton";

export function GamesGridSkeleton() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
			{Array.from({ length: 8 }).map((_, index) => (
				<GameCardSkeleton key={index} />
			))}
		</div>
	);
}
