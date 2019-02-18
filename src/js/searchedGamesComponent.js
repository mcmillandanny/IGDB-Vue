Vue.component('game-search', {
	props: ['searched-games'],

  data: function () {
    return {
    }
  },
  template:`
  	<div>
      <div class="game-searched" v-if="searchedGames">
  			<h1>{{searchedGames.name}}</h1>
  			<img v-for="screenshot in searchedGames.screenshots.slice(0,1)" :src="screenshot.url.replace('t_thumb', 't_screenshot_med')">
  		</div>
 	</div>`

})



// <img class="slide" v-for="picture in popularGameData.screenshots.slice(0,1)" :src="picture.url.replace('t_thumb', 't_cover_uniform')">
