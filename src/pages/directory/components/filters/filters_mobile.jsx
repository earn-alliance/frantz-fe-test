import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "../../../../ui/button";
import {
	Sheet,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetContent,
	SheetTrigger,
} from "../../../../ui/sheet";

export function FiltersMobile({ children }) {
	return (
		<Sheet>
			<Sheet>
				<SheetTrigger asChild>
					<div className="p-6 sticky bg-black z-[1] top-0">
						<Button className="w-full">Filters</Button>
					</div>
				</SheetTrigger>
				<SheetContent className="w-full">
					<SheetHeader>
						<VisuallyHidden>
							<SheetTitle>Filters</SheetTitle>
						</VisuallyHidden>
						<VisuallyHidden>
							<SheetDescription>Filter games</SheetDescription>
						</VisuallyHidden>
					</SheetHeader>

					{children}
				</SheetContent>
			</Sheet>
		</Sheet>
	);
}
