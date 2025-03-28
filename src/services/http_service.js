import Axios from "axios";

export class HttpService {
	constructor() {
		this.client = Axios.create({
			baseURL: process.env.REACT_APP_API_URL,
			headers: {
				"x-hasura-admin-secret": process.env.REACT_APP_HASURA_ADMIN_SECRET,
				"Hasura-Client-Name": process.env.REACT_APP_HASURA_CLIENT_NAME,
			},
		});
	}

	post(query) {
		return this.client.post("", { query });
	}
}
