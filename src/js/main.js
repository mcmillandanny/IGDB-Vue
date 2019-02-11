console.log('Main JS');

let srchBar = document.querySelector('.search');

var app = new Vue({
	el: "#search-app",
	data: {
		userSearch: "",
		searchedGames: [],
		isOpen: false
	},
	methods: {
		searchGames: function() {
			console.log('this was searched ' + this.userSearch);
			const SEARCH_GAME = (`http://circuslabs.net/proxies/igdb/` +
			`?user-key=91cfde4de28e4fb338abbedd15dc86b5&endpoint=/games/?search=` + this.userSearch + `&fields=name,screenshots`);
			axios
				.get(SEARCH_GAME)
				.then((response) => {
					console.log(response.data)
					this.searchedGames = response.data[0];
					this.userSearch = "";
					this.isOpen = true;
				})
				.catch((error) => {
					console.warn("not working", error);
				})
		},
	}
})


// srchBar.addEventListener('keypress', function(e) {
// 	var key = e.which || e.keycode;
// 	if (key === 13) {
// 		let userSearch = srchBar.value;
			
// 		console.log('You searched for ' + userSearch);

// 	axios
// 		.get(SEARCH_GAME)
//   			.then(function (response) {
//     		// handle success
//     		console.log(response);
//   		})
//   			.catch(function (error) {
//     		// handle error
//     		console.log(error);
//   		})
//   			.then(function () {
//     		// always executed
//   		});
// 	}
// })