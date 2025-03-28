import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "../../../../../utils/cn_util";

export function FilterGroup({ children, label }) {
	const [showAll, setShowAll] = useState(false);

	return (
		<>
			<div className="flex flex-col my-4">
				<div className="flex items-center justify-between">
					<h3 className="text-sm text-zinc-300">{label}</h3>
					{children ? (
						<button
							className="flex items-center cursor-pointer"
							onClick={() => setShowAll((current) => !current)}
						>
							<span className="text-sm text-zinc-300 mr-2">
								Show {showAll ? "less" : "all"}
							</span>
							<ChevronDown
								className={cn("w-4 h-4 text-zinc-300 transition-transform", {
									"rotate-180 transform": showAll,
								})}
							/>
						</button>
					) : null}
				</div>
			</div>

			{children
				? children({
						showAll,
						setShowAll,
					})
				: null}
		</>
	);
}
