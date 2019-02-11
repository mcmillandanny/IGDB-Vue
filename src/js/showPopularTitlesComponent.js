Vue.component('popular-titles', {
	props: ['game-titles'],

  data: function () {
    return {
    }
  },
  template: `
        <div>
          <div class="popular-games-wrapper">
    		    <div class="popular-games" v-for="popularGameData in gameTitles">
                <img class="slide" v-for="picture in popularGameData.screenshots.slice(0,1)" :src="picture.url.replace('t_thumb', 't_cover_uniform')">
                <p class="popular-game-header-text game-info-card" >{{ popularGameData.name }}</p>
            </div>
          </div>
        </div>
  		`
})