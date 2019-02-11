
var app = new Vue({
	el: "#random-games-app",
	data: {
		gameData: [],

	},
	methods: {
		getdata: function() {
			let randomNumber = Math.floor(Math.random() * 60000)
			console.log(randomNumber)
			const IGDB_RANDOM_URL = (`http://circuslabs.net/proxies/igdb/
				?user-key=91cfde4de28e4fb338abbedd15dc86b5&endpoint=/
				games/` + randomNumber + `?fields=name,genres,rating,screenshots,summary,rating`)
			axios
				.get(IGDB_RANDOM_URL)
				.then((response) => {
					console.log("IGDB responded with", response.data)
					this.gameData = response.data[0];
				})
				.catch((error) => {
					console.warn("not working", error);
				})
		},
	}
})

// function getGameID(gameSearch) {
// 	let searchBtn = document.querySelector('.search-input');
// 	axios.get(`http://circuslabs.net/proxies/igdb/?user-key=91cfde4de28e4fb338abbedd15dc86b5&endpoint=/games/?search=`
// 		 + gameSearch + `&fields=name,genres,rating,screenshots,summary`)
// 	  .then(function (response) {
// 	  	console.log(response.data)
// })
// 	  .catch(function (error) { 
// 	    console.log(error);
// 	})      
// }



// https:images.igdb.com/igdb/image/upload/t_thumb/m9evs7rnwqh7nhrj11xw.jpg -replace t_thumb with t_cover_big for better
// screenshots



