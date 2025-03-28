import { render, screen, waitFor } from "@testing-library/react";
import { DirectoryPage } from "../../pages/directory/directory_page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("axios", () => {
	const Axios = {
		create() {
			return {
				post(_path, body) {
					if (body.query.includes("game_genre_types")) {
						return {
							data: {
								data: {
									game_genre_types: [
										{
											genre_name: "SANDBOX",
										},
										{
											genre_name: "RTS",
										},
									],
								},
							},
						};
					}

					if (body.query.includes("games")) {
						return {
							data: {
								data: {
									games: [
										{
											id: "stella-fantasy",
											is_live: false,
											name: "Stella Fantasy",
											directory_gif_name: "stella_fantasy.gif",
											directory_image_name: "stella_fantasy.jpg",
											genres: [
												{
													genre_name: "SANDBOX",
												},
												{
													genre_name: "RTS",
												},
											],
										},
									],
								},
							},
						};
					}

					return {};
				},
			};
		},
	};

	return Axios;
});

test("fetches and displays all game genres when user visits page", async () => {
	render(
		<QueryClientProvider client={new QueryClient()}>
			<DirectoryPage />
		</QueryClientProvider>,
	);

	const genres = ["SANDBOX", "RTS"];
	const checkboxes = await waitFor(() => screen.getAllByRole("checkbox"));

	for (const genre of genres) {
		const checkbox = checkboxes.find((checkbox) => checkbox.id === genre);

		expect(checkbox).toBeInTheDocument();
	}
});

test("fetches and displays all games when user visits page", async () => {
	render(
		<QueryClientProvider client={new QueryClient()}>
			<DirectoryPage />
		</QueryClientProvider>,
	);

	const game = await waitFor(() => screen.getByText("Stella Fantasy"));

	expect(game).toBeInTheDocument();
});
