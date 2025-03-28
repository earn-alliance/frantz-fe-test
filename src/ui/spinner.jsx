import { Loader } from "lucide-react";

export function Spinner() {
	return (
		<div className="w-full flex items-center py-2 justify-center">
			<Loader className="animate-spin" />
		</div>
	);
}
