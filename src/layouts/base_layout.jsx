export function BaseLayout({ children }) {
	return (
		<div className="flex flex-col w-screen h-screen">
			<main className="flex flex-col flex-1">{children}</main>
		</div>
	);
}

BaseLayout.displayName = "BaseLayout";
