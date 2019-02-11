"use strict";

var app = new Vue({
	el: "#game-news",
	data: {
		gameNews: []
	},
	methods: {
		getGameNewsData: function getGameNewsData() {
			var _this = this;

			axios.get("https://newsapi.org/v2/top-headlines?sources=ign&apiKey=" + IGN_KEY).then(function (response) {
				console.log("here is the data", response.data);
				_this.gameNews = response;
				console.log(_this.gameNews, "hellllooo");
			}).catch(function (error) {
				console.warn("not working", error);
			});
		}
	}
});
//# sourceMappingURL=gameNews.js.map
