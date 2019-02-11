'use strict';

Vue.component('popular-titles', {
  props: ['game-titles'],

  data: function data() {
    return {};
  },
  template: '\n        <div>\n          <div class="popular-games-wrapper">\n    \t\t    <div class="popular-games" v-for="popularGameData in gameTitles">\n                <img class="slide" v-for="picture in popularGameData.screenshots.slice(0,1)" :src="picture.url.replace(\'t_thumb\', \'t_cover_uniform\')">\n                <p class="popular-game-header-text game-info-card" >{{ popularGameData.name }}</p>\n            </div>\n          </div>\n        </div>\n  \t\t'
});
//# sourceMappingURL=showPopularTitlesComponent.js.map
