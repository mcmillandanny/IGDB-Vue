"use strict";

var app = new Vue({
	el: "#game-news",
	data: {
		gameNews: null
	},
	methods: {
		moment: function (_moment) {
			function moment() {
				return _moment.apply(this, arguments);
			}

			moment.toString = function () {
				return _moment.toString();
			};

			return moment;
		}(function () {
			return moment();
		})
	},
	mounted: function mounted() {
		var _this = this;

		axios.get("https://newsapi.org/v2/top-headlines?sources=ign&apiKey=" + IGN_KEY).then(function (response) {
			_this.gameNews = response;
			console.log(_this.gameNews, "data from ign");
		}).catch(function (error) {
			console.warn("not working", error);
		});
	}
});
//# sourceMappingURL=gameNews.js.map
