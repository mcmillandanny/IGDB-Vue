'use strict';

Vue.component('game-feed', {
  props: ['game-data'],

  data: function data() {
    return {};
  },
  template: '\n        <div>\n          <h1>{{gameData.name}}</h1>\n          <p>{{gameData.summary}}</p>\n          <img v-if="gameData.screenshots"  :src="gameData.screenshots[0].url.replace(\'t_thumb\', \'t_screenshot_med\')">\n       </div>'
});
//# sourceMappingURL=GameFeedComponent.js.map
