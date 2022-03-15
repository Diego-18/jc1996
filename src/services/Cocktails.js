import API from "../services/API";

function getCocktails(search) {
	return API().get("/search.php?s=" + search);
}

export default { getCocktails };
