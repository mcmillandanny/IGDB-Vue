"use strict";

console.log("popular titles app");

var app = new Vue({
	el: "#popular-games-app",
	data: {
		popularTitles: []
	},
	mounted: function mounted() {
		this.getGameTitles();
	},
	methods: {
		getGameTitles: function getGameTitles() {
			var _this = this;

			var IGDB_POPULAR_RATING = "http://circuslabs.net/proxies/igdb/?user-key=91cfde4de28e4fb338abbedd15dc86b5" + "&endpoint=/games/?fields=name,popularity,screenshots,websites&order=popularity:desc";

			axios.get(IGDB_POPULAR_RATING).then(function (response) {
				// console.log("IGDB responded with popular titles", response.data)
				_this.popularTitles = response.data;
			}).catch(function (error) {
				console.warn("not working", error);
			});
		}
	}
});
//# sourceMappingURL=popular-games.js.map
