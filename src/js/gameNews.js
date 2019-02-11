
var app = new Vue({
	el: "#game-news",
	data: {
		gameNews: [],
	},
	methods: {
        getGameNewsData: function() {	
			axios
				.get("https://newsapi.org/v2/top-headlines?sources=ign&apiKey=" + IGN_KEY)
				.then ( (response) => {
					console.log("here is the data", response.data)
					this.gameNews = response;
					console.log(this.gameNews, "hellllooo");
				})
				.catch((error) => {
					console.warn("not working", error);
				})
		}
	}
})