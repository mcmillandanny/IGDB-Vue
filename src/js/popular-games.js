console.log("popular titles app")

var app = new Vue({
	el: "#popular-games-app",
	data: {
		popularTitles: [],
	},
	mounted:function() {
		this.getGameTitles()
	},
	methods: {
		getGameTitles: function() {
			const IGDB_POPULAR_RATING = (`http://circuslabs.net/proxies/igdb/?user-key=91cfde4de28e4fb338abbedd15dc86b5`+
			`&endpoint=/games/?fields=name,popularity,screenshots,websites&order=popularity:desc`)

			axios
				.get(IGDB_POPULAR_RATING)
				.then((response) => {
					// console.log("IGDB responded with popular titles", response.data)
					this.popularTitles = response.data;
				})
				.catch((error) => {
					console.warn("not working", error);
				})
		},
	}
})