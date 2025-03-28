import { HttpService } from "./http_service";

export class GameGenreService {
	constructor() {
		this.http = new HttpService();
	}

	async all() {
		const response = await this.http.post(`
        query Query {
          game_genre_types {
            genre_name
          }
        }
      `);

		return response.data.data.game_genre_types;
	}
}
