'use strict';

Vue.component('game-search', {
  props: ['searched-games'],

  data: function data() {
    return {};
  },
  template: '\n  \t<div>\n      <div class="game-searched" v-if="searchedGames">\n  \t\t\t<h1>{{searchedGames.name}}</h1>\n  \t\t\t<img v-for="screenshot in searchedGames.screenshots.slice(0,1)" :src="screenshot.url.replace(\'t_thumb\', \'t_screenshot_med\')">\n  \t\t</div>\n \t</div>'

});

// <img class="slide" v-for="picture in popularGameData.screenshots.slice(0,1)" :src="picture.url.replace('t_thumb', 't_cover_uniform')">
//# sourceMappingURL=searchedGamesComponent.js.map
