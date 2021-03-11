import * as axios from "axios";

export let instance = axios.create({
	baseURL: "https://api.punkapi.com/v2/beers",
});

export let api = {
	getItems(currentPage, perPage) {
		return instance
			.get(`?page=${currentPage}&per_page=${perPage}`)
			.then((response) => response.data)
			.catch((e) => console.log(e));
	},

	getItemsTotalCount(page) {
		return instance
			.get(`?page=${page}&per_page=80`)
			.then((response) => response.data.length)
			.catch((e) => console.log(e));
	},

	getItem(id) {
		return instance
			.get(`${id}`)
			.then((response) => response.data)
			.catch((e) => console.log(e));
	},

	getFavoriteItems(ids) {
		return instance
			.get(`?ids=${ids}`)
			.then((response) => response.data)
			.catch((e) => console.log(e));
	},
};
