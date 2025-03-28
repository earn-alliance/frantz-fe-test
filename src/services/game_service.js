import { HttpService } from "./http_service";

export class GameService {
	constructor() {
		this.http = new HttpService();
	}

	#getFilterWhereQuery(filters) {
		const genresQuery =
			filters.genres.length > 0
				? `genres: {
      _or: {
        genre_name: {_in: [${filters.genres.map((genre) => genre).join(",")}]}
      }
    }`
				: ``;
		const searchQuery = filters.search
			? `name:{
      _iregex: "${filters.search}"
    }`
			: ``;

		return `(where: { is_live: { _eq: ${filters.live} }, ${genresQuery}, ${searchQuery} } )`;
	}

	async filter(filters) {
		const response = await this.http.post(`
							query Query {
									games${this.#getFilterWhereQuery(filters)} {
											id
											is_live
											name
											directory_gif_name
											directory_image_name
											genres {
													genre_name
											}
									}
							}
				`);

		return response.data.data.games;
	}
}
