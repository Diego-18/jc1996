import axios from "axios";

export default () => {
	return axios.create({
		baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
		headers: {
			Accept: "application/json",
			"Content-type": "application/json",
		},
	});
};
