
var app = new Vue({
	el: "#game-news",
	data: {
		gameNews: null,
	},
	methods: {
		moment: function () {
			return moment();
		}
	},
	mounted: function() {	
		axios
			.get("https://newsapi.org/v2/top-headlines?sources=ign&apiKey=" + IGN_KEY)
			.then ( (response) => {
				this.gameNews = response;
				console.log(this.gameNews, "data from ign");
			})
			.catch((error) => {
				console.warn("not working", error);
			})
	}
})