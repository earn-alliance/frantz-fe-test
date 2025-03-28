import { cn } from "../../../../../utils/cn_util";
import { toSentenceCase } from "../../../../../utils/to_sentence_case_util";
import { useGameCardImageWithFallback } from "../hooks/use_game_card_image_with_fallback";

export function GameCard({ game }) {
	let image = `/images/${game.directory_image_name}`;
	let gif = `/images/${game.directory_gif_name}`;

	const { onError, errors } = useGameCardImageWithFallback(image, gif);

	if (errors.image && !errors.gif) {
		image = gif;
	}

	if (errors.gif && !errors.image) {
		gif = image;
	}

	if (errors.gif && errors.image) {
		image = "/images/placeholder.webp";
		gif = "/images/placeholder.webp";
	}

	return (
		<li className="min-h-72 rounded-md bg-primary/10 flex flex-col group transform duration-200 hover:scale-115 hover:shadow-[0_0_8px_orange] transition border border-transparent hover:border-[orange]">
			<div className="w-full h-[8rem] group-hover:hidden">
				<img
					className="w-full h-full rounded-t-md"
					src={image}
					alt={game.name}
					onError={() => onError("image")}
					loading="lazy"
				/>
			</div>
			<div className="w-full h-[8rem] hidden group-hover:block">
				<img
					className="w-full h-full rounded-t-md"
					src={gif}
					alt={`${game.name} gameplay`}
					onError={() => onError("gif")}
					loading="lazy"
				/>
			</div>

			<div className="flex-grow w-full flex flex-col rounded-b-md p-4">
				<span
					className={cn(
						"text-xs uppercase font-bold group-hover:-translate-y-2 group-hover:opacity-0 group-hover:pointer-events-none group-hover:h-[0.5px]",
						{
							"text-green-400": game.is_live,
							"text-red-400": !game.is_live,
						},
					)}
				>
					{game.is_live ? "live" : "not live"}
				</span>
				<span className="text-white text-sm font-semibold inline-flex transition duration-200 mt-2 group-hover:-translate-y-2">
					{game.name}
				</span>
				<span className="text-xs uppercase font-medium group-hover:-translate-y-2 group-hover:opacity-0 group-hover:pointer-events-none text-foreground group-hover:h-[0.5px] inline-flex mt-2">
					Genre:{" "}
					{game.genres
						.map((genre) => toSentenceCase(genre.genre_name))
						.join(", ")}
				</span>
				<span className="lg:h-[0.5px] group-hover:h-auto lg:opacity-0 text-xs transition group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
					consequatur et possimus magnam quasi, recusandae.
				</span>
			</div>
		</li>
	);
}
